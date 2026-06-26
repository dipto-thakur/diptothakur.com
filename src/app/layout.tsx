import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/config/site';
import './globals.css';
import { ScrollToTop } from "@/components/ui/scroll-to-top";


/* ── Viewport ─────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/* ── Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:  siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,

  keywords: [
    'Portfolio',
    'Developer',
    'Software Engineer',
    'Web Developer',
    'Frontend',
    'Backend',
    siteConfig.name,
  ],

  authors:   [{ name: siteConfig.name, url: siteConfig.url }],
  creator:   siteConfig.name,
  publisher: siteConfig.name,

  alternates: { canonical: '/' },

  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         siteConfig.url,
    title:       siteConfig.title,
    description: siteConfig.description,
    siteName:    siteConfig.name,
  },

  twitter: {
    card:        'summary_large_image',
    title:       siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-video-preview':  -1,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },

  category: 'technology',
};

/* ── Layout ───────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">

        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:border focus:border-zinc-200 focus:bg-white/95 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-lg focus:backdrop-blur focus:outline-none dark:focus:border-zinc-800 dark:focus:bg-zinc-950/95 dark:focus:text-zinc-100"
        >
          Skip to main content
        </a>

        <div className="relative flex min-h-screen flex-col overflow-x-clip">

          {/* Ambient glow — two soft orbs, top + bottom */}
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* top center */}
            <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/4 rounded-full bg-zinc-100/60 blur-3xl dark:bg-zinc-800/15" />
            {/* bottom right — subtle counter-balance */}
            <div className="absolute bottom-0 right-0 h-[28rem] w-[40rem] translate-x-1/4 translate-y-1/4 rounded-full bg-zinc-100/40 blur-3xl dark:bg-zinc-800/10" />
          </div>

          <Header />

          <main id="main-content" className="flex-1 pb-20">
            {children}
          </main>

          <Footer />

        </div>
      <ScrollToTop />
      </body>
    </html>
  );
}