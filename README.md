# Developer Portfolio

A documentation-first developer portfolio platform built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Images | ImageKit (with placeholder fallback) |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── projects/           # Projects listing + detail
│   ├── blog/               # Blog listing + detail
│   ├── experience/         # Experience timeline
│   ├── open-source/        # OSS repos + contributions
│   ├── contact/            # Contact + testimonials
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # Design system primitives
│   ├── layout/             # Header, Footer
│   └── features/           # Domain components
├── content/                # All placeholder data — replace to go live
├── config/site.ts          # Name, URL, social links
├── lib/                    # utils, imagekit helpers
└── types/index.ts          # Shared interfaces
```

## Quick Start

```bash
npm install
npm run dev
```

## Customisation

### Identity — src/config/site.ts
Change name, URL, email, tagline, social links.

### Content — src/content/
Replace TypeScript arrays in projects/, blog/, experience/, testimonials/.
All interfaces are in src/types/index.ts.

### Images — src/lib/imagekit.ts
Set imagekit.urlEndpoint in site.ts.
Pass relative paths to getImageUrl() — placeholders render until then.

## Deployment

Push to GitHub → Vercel → deploy.
No environment variables required for base build.

## Design Principles

- Server Components by default
- Borders over shadows (Vercel/Linear aesthetic)
- Zero animation dependencies — CSS transitions only, prefers-reduced-motion respected
- Flat data layer — swap content source without touching page components
- Feature-oriented structure — each domain owns its components

## Accessibility

- Skip-to-content link
- aria-label on icon-only buttons
- aria-labelledby on all sections
- Keyboard-navigable nav
- System font stack (no FOUT)
- WCAG AA target
