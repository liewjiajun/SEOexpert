'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAVIGATION, CTA } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/70 backdrop-blur-glass shadow-glass border-b border-white/20'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/SEOExpert/SEOExpert_full_black.svg"
              alt="SEOExpert"
              width={160}
              height={40}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-ink-secondary hover:text-violet-600 transition-colors py-2 font-medium"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={cn(
                        'inline-block ml-1 w-4 h-4 transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown with glass effect */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in-up">
                    <div className="glass-card py-2 min-w-[220px] border border-violet-100/50">
                      {item.children.map((child, index) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-ink-secondary hover:text-violet-600 hover:bg-violet-50/50 transition-all duration-200"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" href={CTA.secondary.href}>
              {CTA.secondary.text}
            </Button>
            <Button variant="primary" size="sm" href={CTA.primary.href}>
              {CTA.primary.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-full transition-all duration-300',
              isMenuOpen ? 'bg-violet-100 text-violet-600' : 'text-ink hover:bg-violet-50'
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu with glass effect */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
          )}
        >
          <div className="pt-4 space-y-4 glass-card mt-2 p-4">
            {NAVIGATION.map((item, index) => (
              <div
                key={item.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  className="block py-2 text-ink-secondary hover:text-violet-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-1 text-sm text-muted hover:text-violet-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="secondary" fullWidth href={CTA.secondary.href}>
                {CTA.secondary.text}
              </Button>
              <Button variant="primary" fullWidth href={CTA.primary.href}>
                {CTA.primary.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
