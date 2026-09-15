import { Instagram } from 'lucide-react'
import { site } from '../data/site.js'
import Counter from './Counter.jsx'

export default function SocialAndStats() {
  return (
    <section className="border-b hairline bg-surface py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <span className="label text-crimson">Follow the journey</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
              {site.instagramHandle}
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Daily football content, matchday reactions and visual
              storytelling — built for a feed that moves fast.
            </p>

            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              <Instagram size={16} strokeWidth={1.8} />
              Follow on Instagram
            </a>

            <div className="mt-12 flex flex-wrap gap-2">
              {site.socialProof.categories.map((cat) => (
                <span key={cat} className="rounded-full border hairline px-4 py-2 text-xs text-muted">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {site.stats.map((stat) => (
                <Counter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            <p className="mt-10 text-xs leading-relaxed text-faint">
              Figures shown are placeholders pending verified Instagram
              insights — replace them in{' '}
              <code className="rounded bg-elevated px-1.5 py-0.5">src/data/site.js</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
