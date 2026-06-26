'use client';

import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from 'react-icons/fi';

export function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-zinc-100/80
        bg-white/75
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/70
        dark:border-zinc-900
        dark:bg-zinc-950/70
        dark:supports-[backdrop-filter]:bg-zinc-950/65
      "
    >
      <div
        className="
          mx-auto
          max-w-4xl
          px-4
          sm:px-6
        "
      >
        {/* Top Bar */}
        <div
          className="
            flex h-16
            items-center
            justify-between
            gap-4
          "
        >
          {/* Brand */}
          <NextLink
            href="/"
            className="
              group
              flex items-center gap-2
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-zinc-900
              focus-visible:ring-offset-2
              dark:focus-visible:ring-zinc-100
              dark:focus-visible:ring-offset-zinc-950
            "
          >
            <span
              className="
                text-sm
                font-semibold
                tracking-[-0.02em]
                text-zinc-950
                transition-colors
                group-hover:text-zinc-700
                dark:text-zinc-50
                dark:group-hover:text-zinc-300
              "
            >
              {siteConfig.name}
            </span>

            <FiArrowUpRight
              size={13}
              className="
                -translate-x-1
                opacity-0
                transition-all
                duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />
          </NextLink>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:block"
          >
            <ul
              className="
                flex items-center
                rounded-xl
                border border-zinc-100
                bg-white/60
                p-1
                backdrop-blur-sm
                dark:border-zinc-800
                dark:bg-zinc-900/60
              "
            >
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + '/');

                return (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className={cn(
                        `
                        relative
                        inline-flex
                        items-center
                        rounded-lg
                        px-3 py-2
                        text-sm
                        transition-all
                        duration-200
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-zinc-900
                        dark:focus-visible:ring-zinc-100
                        `,
                        isActive
                          ? `
                            bg-zinc-100
                            font-medium
                            text-zinc-900
                            shadow-sm
                            dark:bg-zinc-800
                            dark:text-zinc-100
                          `
                          : `
                            text-zinc-500
                            hover:text-zinc-900
                            dark:text-zinc-400
                            dark:hover:text-zinc-100
                          `
                      )}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isOpen ? 'Close menu' : 'Open menu'
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              inline-flex
              h-10 w-10
              items-center
              justify-center
              rounded-xl
              border border-zinc-100
              bg-white/60
              text-zinc-600
              backdrop-blur-sm
              transition-all
              duration-200
              hover:bg-white
              hover:text-zinc-900
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-zinc-900
              md:hidden
              dark:border-zinc-800
              dark:bg-zinc-900/60
              dark:text-zinc-400
              dark:hover:bg-zinc-900
              dark:hover:text-zinc-100
              dark:focus-visible:ring-zinc-100
            "
          >
            {isOpen ? (
              <FiX size={18} />
            ) : (
              <FiMenu size={18} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            `
            overflow-hidden
            transition-all
            duration-200
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:hidden
            `,
            isOpen
              ? 'max-h-[420px] pb-4 opacity-100'
              : 'max-h-0 opacity-0'
          )}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              rounded-2xl
              border border-zinc-100
              bg-white/80
              p-2
              backdrop-blur-xl
              shadow-lg
              shadow-zinc-900/5
              dark:border-zinc-800
              dark:bg-zinc-900/80
              dark:shadow-black/20
            "
          >
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + '/');

                return (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className={cn(
                        `
                        flex h-11
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        text-sm
                        transition-all
                        duration-200
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-zinc-900
                        dark:focus-visible:ring-zinc-100
                        `,
                        isActive
                          ? `
                            bg-zinc-100
                            font-medium
                            text-zinc-900
                            shadow-sm
                            dark:bg-zinc-800
                            dark:text-zinc-100
                          `
                          : `
                            text-zinc-500
                            hover:bg-zinc-50
                            hover:text-zinc-900
                            dark:text-zinc-400
                            dark:hover:bg-zinc-800/60
                            dark:hover:text-zinc-100
                          `
                      )}
                    >
                      <span>{item.label}</span>

                      <FiArrowUpRight
                        size={14}
                        className={cn(
                          'transition-all duration-200',
                          isActive
                            ? 'opacity-100'
                            : 'opacity-40'
                        )}
                      />
                    </NextLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}