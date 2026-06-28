import { siteConfig, socialLinks } from '@/config/site';
import { getAvatarUrl, getCoverUrl } from '@/lib/image';
import { Link } from '@/components/ui/link';
import { RoleFlip } from '@/components/ui/role-flip';
import { getSocialIcon } from '../_data/social-icons';
import { FiArrowRight, FiMapPin, FiMail } from 'react-icons/fi';
import { HeroCover } from '@/components/ui/hero-cover';
export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading">

      {/* Cover 
      <div className="relative overflow-hidden rounded-3xl">
        <div className="group relative">
          <img
            src={getCoverUrl(siteConfig.coverImage)}
            alt=""
            className="h-44 w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.035] sm:h-60"
          />
          {/* Bottom fade 
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent dark:from-zinc-950 dark:via-zinc-950/15 dark:to-transparent"
          />
          {/* Vignette 
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_25%,rgba(0,0,0,.06))] dark:bg-[radial-gradient(circle_at_top,transparent_30%,rgba(255,255,255,.03))]"
          />
          {/* Noise 
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-overlay [background-image:url('/noise.png')]"
          />
        </div>
      </div>*/}


<HeroCover accent="#10b981" />

      {/* Profile row */}
      <div className="-mt-12 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:gap-6 sm:text-left">
          {/* Avatar */}
          <div className="group relative">
            <div className="rounded-full bg-white/96 p-2 shadow-xl shadow-zinc-900/8 ring-1 ring-zinc-200/70 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-hover:ring-zinc-300/80 dark:bg-zinc-950/95 dark:ring-zinc-800 dark:shadow-black/30 dark:group-hover:ring-zinc-700">
              <img
                src={getAvatarUrl(siteConfig.profileImage, 120)}
                alt={siteConfig.name}
                className="h-24 w-24 rounded-full object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.045] sm:h-32 sm:w-32"
              />
            </div>

            {/* Online dot */}
            <div className="absolute bottom-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md dark:bg-zinc-950 sm:bottom-2 sm:right-2 sm:h-6 sm:w-6">
              <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-emerald-500/45" />
              <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950" />
            </div>

            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-zinc-900/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/5"
            />
          </div>

          {/* Identity */}
          <div className="space-y-2 sm:space-y-3">
            <div className="space-y-1.5">
              <h1
                id="hero-heading"
                className="text-[2rem] font-semibold tracking-[-0.055em] text-zinc-950 dark:text-zinc-50 sm:text-5xl"
              >
                {siteConfig.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[14px] text-zinc-500 dark:text-zinc-400 sm:justify-start sm:text-[15px]">
                <span className="font-medium text-zinc-400 dark:text-zinc-500">Role</span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <RoleFlip roles={siteConfig.roles} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Facts */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-900">
        <div className="grid divide-y divide-zinc-100 dark:divide-zinc-900 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
            {
                label: 'Location',
                value: (
                <Link
                    href={siteConfig.locationMap}
                    external
                    className="inline-flex items-center gap-1.5 break-words text-zinc-800 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
                >
                    <FiMapPin size={14} className="text-zinc-400" />
                    {siteConfig.location}
                </Link>
                ),
            },
            { label: 'Focus', value: siteConfig.currentFocus },
            { label: 'Availability', value: siteConfig.availability },
            ].map((item) => (
            <div
                key={item.label}
                className="flex flex-col justify-center px-5 py-4 sm:min-h-[88px]"
            >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                {item.label}
                </p>

                <div className="mt-1.5 text-[15px] leading-6 text-zinc-800 dark:text-zinc-200">
                {item.value}
                </div>
            </div>
            ))}
        </div>
        </div>

      {/* Description */}
      <div className="mt-8 max-w-2xl space-y-3 sm:mt-10 sm:space-y-2">
        <p className="text-[1.05rem] font-medium leading-7 tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 sm:text-lg">{siteConfig.tagline}</p>
        <p className="max-w-prose text-[15px] leading-7 text-zinc-600 dark:text-zinc-400 sm:text-sm">{siteConfig.description}</p>
      </div>

      {/* CTA + Socials */}
      <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            showExternalIcon={false}
            className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-zinc-900
                px-5
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-zinc-800
                dark:bg-zinc-100
                dark:text-zinc-900
                dark:hover:bg-zinc-200
                sm:h-auto
                sm:px-4
                sm:py-2
                "
          >
            View Work
            <FiArrowRight size={14} />
          </Link>

          <Link
            href="/contact"
            showExternalIcon={false}
            className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-zinc-200
                px-5
                text-sm
                font-medium
                text-zinc-700
                transition-colors
                hover:bg-zinc-50
                dark:border-zinc-800
                dark:text-zinc-300
                dark:hover:bg-zinc-900
                sm:h-auto
                sm:px-4
                sm:py-2
                "
          >
            Contact
            <FiMail size={14} />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-1.5">
          {socialLinks.map((social) => {
            const Icon = getSocialIcon(social.icon);
            return (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                title={social.label}
                className="group inline-flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-700"
              >
                <Icon size={15} className="transition-transform duration-200 group-hover:scale-105" />
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
}