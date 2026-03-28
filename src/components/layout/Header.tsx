'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/store/cart';
import { useTheme } from '@/store/theme';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { SlugTicker } from '@/components/ui/SlugTicker';
import { CartModal } from '@/components/ui/CartModal';
import { useState, useEffect, useRef } from 'react';
import {
  ShoppingCart, Sun, Moon, Home, Car, Crown, Globe,
  Play, LogOut, User, BarChart3, Settings, Pencil,
  TrendingUp, FileText, Coins, Zap, Menu, X
} from 'lucide-react';

const NAV = [
  { href: '/cv',      icon: FileText,label: 'CVs' },
  { href: '/slugs',   icon: Crown,   label: 'Slugs' },
  { href: '/sites',   icon: Globe,   label: 'Sites' },
  { href: '/videos',  icon: Play,    label: 'Videos' },
  { href: '/jackpot', icon: Zap,     label: '🎰 Jackpot' },
];

export function Header() {
  const { user, signOut } = useAuth();
  const { items, isOpen, open, close } = useCart();
  const { dark: isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const cartCount = items.length;

  // Close avatar menu on outside click
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) setAvatarOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const initial = user?.email?.[0]?.toUpperCase() || 'U';

  return (
    <>
    <>
      <header className="sticky top-0 z-50 h-14 flex items-center justify-between px-4 md:px-6"
        style={{
          background: 'hsl(213 100% 20%)',
          borderBottom: '2px solid hsl(43 90% 45%)',
        }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <TrendingUp className="w-5 h-5 text-white" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-lg tracking-tight font-mono">TrustBank</span>
            <span className="text-[8px] font-bold font-mono uppercase tracking-[0.2em]"
              style={{ color: 'hsl(43 90% 55%)' }}>
              Mini Sites · USDC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 text-xs font-bold transition-all">
              <Icon className="w-3.5 h-3.5" /> {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          {/* Editor button */}
          <Link href="/editor"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
            <Pencil className="w-3.5 h-3.5" /> Editor
          </Link>

          {/* Theme toggle */}
          <button onClick={toggle}
            className="w-8 h-8 rounded-lg text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language */}
          <LanguageSwitcher />

          {/* Cart */}
          <button onClick={open}
            className="relative w-8 h-8 rounded-lg text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all">
            <ShoppingCart className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center"
                style={{ background: 'hsl(43 90% 50%)', color: 'hsl(220 60% 12%)' }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Avatar / Sign in */}
          {user ? (
            <div ref={avatarRef} className="relative">
              <button onClick={() => setAvatarOpen(!avatarOpen)}
                className="w-8 h-8 rounded-full font-black text-xs flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ background: 'white', color: 'hsl(213 100% 20%)' }}>
                {initial}
              </button>
              {avatarOpen && (
                <div className="absolute right-0 top-10 w-52 card shadow-2xl py-1 z-50">
                  <div className="px-3 py-2 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
                    <p className="text-[10px] truncate" style={{ color: 'hsl(var(--muted-foreground))' }}>{user.email}</p>
                  </div>
                  {[
                    ['/editor',   Pencil,   'My Mini Site'],
                    ['/dashboard',BarChart3,'Earnings'],
                    ['/creditos', Coins,    'Credits'],
                    ['/admin',    Settings, 'Admin Panel'],
                  ].map(([href, Icon, label]) => (
                    <Link key={href as string} href={href as string} onClick={() => setAvatarOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold hover:bg-secondary transition-colors"
                      style={{ color: 'hsl(var(--foreground))' }}>
                      <Icon className="w-3.5 h-3.5" /> {label as string}
                    </Link>
                  ))}
                  <button onClick={() => { signOut(); setAvatarOpen(false); }}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold w-full text-left hover:bg-secondary transition-colors text-red-500">
                    <LogOut className="w-3.5 h-3.5" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white/80 hover:text-white text-xs font-bold transition-colors hover:bg-white/10">
              <User className="w-3.5 h-3.5" /> Sign In
            </Link>
          )}

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 rounded-lg text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all">
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-14" style={{ background: 'hsl(213 100% 15%)' }}>
          <nav className="p-4 space-y-1">
            <Link href="/editor" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-black text-base"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
              <Pencil className="w-5 h-5" /> Editor
            </Link>
            {NAV.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all">
                <Icon className="w-5 h-5" /> {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Cart modal */}
      {isOpen && <CartModal />}
    </>
      <SlugTicker />
    </>
  );
}
