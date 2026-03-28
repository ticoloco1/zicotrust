'use client';
import { useState, useRef, useEffect } from 'react';
import { LANGS, getLang, setLang, type Lang } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';

export function LanguageSwitcher() {
  const [open, setOpen]       = useState(false);
  const [current, setCurrent] = useState<Lang>('en');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(getLang());
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const change = (lang: Lang) => {
    setCurrent(lang);
    setOpen(false);
    setLang(lang); // reloads page
  };

  const curr = LANGS.find(l => l.code === current) || LANGS[0];

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--bg2)] transition-all border border-[var(--border)]">
        <span className="text-base leading-none">{curr.flag}</span>
        <span className="hidden sm:block text-xs font-semibold">{curr.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-2xl z-[300] overflow-hidden min-w-[160px]">
          {LANGS.map(lang => (
            <button key={lang.code} onClick={() => change(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left hover:bg-[var(--bg2)] ${current === lang.code ? 'text-brand font-bold bg-brand/5' : 'text-[var(--text)]'}`}>
              <span className="text-lg leading-none">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {current === lang.code && <span className="text-brand text-xs font-black">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
