// Cloudflare R2 Upload Utility
// Uses a Next.js API route as proxy (R2 requires server-side credentials)
// Public URLs served via Cloudflare CDN - zero egress cost

export interface UploadResult {
  url: string;
  key: string;
}

export async function uploadToR2(
  file: File,
  folder: string,
  userId: string
): Promise<UploadResult> {
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const key = `${folder}/${userId}/${Date.now()}.${ext}`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('key', key);

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Upload failed' }));
    throw new Error(err.error || 'Upload failed');
  }

  const data = await res.json();
  return { url: data.url, key };
}

// Fallback to Supabase Storage if R2 not configured
export async function uploadFile(
  file: File,
  folder: string,
  userId: string
): Promise<string> {
  // Try R2 first if configured
  if (process.env.NEXT_PUBLIC_R2_PUBLIC_URL) {
    const result = await uploadToR2(file, folder, userId);
    return result.url;
  }

  // Fallback: Supabase Storage
  const { supabase } = await import('./supabase');
  const path = `${userId}/${folder}/${Date.now()}_${file.name.replace(/[^a-z0-9.]/gi, '_')}`;
  const { error } = await supabase.storage
    .from('platform-assets')
    .upload(path, file, { upsert: true });
  if (error) throw error;
  return supabase.storage.from('platform-assets').getPublicUrl(path).data.publicUrl;
}
