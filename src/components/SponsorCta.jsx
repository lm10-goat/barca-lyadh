import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site.js'

export default function SponsorCta() {
  return (
    <section className="relative overflow-hidden border-b hairline bg-blaugrana py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 60% at 15% 20%, rgba(51,85,255,0.35), transparent), radial-gradient(50% 50% at 90% 90%, rgba(176,26,56,0.3), transparent)',
        }}
      />
      <div className="grain" />

      <div className="container-content relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-light leading-[1.1] text-ink md:text-6xl">
          Your brand. Our audience. One game.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/75">
          Interested in collaborating with {site.brandName}? Let's create
          football content that people actually want to see.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
          >
            Start a partnership
            <ArrowUpRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${site.businessEmail}`}
            className="rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
