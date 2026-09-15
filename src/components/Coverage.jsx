import { coverageAreas } from '../data/content.js'
import { images } from '../data/images.js'
import ImagePanel from './ImagePanel.jsx'

export default function Coverage() {
  return (
    <section className="relative overflow-hidden border-b hairline bg-surface py-24 md:py-32">
      <ImagePanel src={images.coverage} alt="" variant="blue" className="absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />

      <div className="container-content relative">
        <span className="label text-crimson">Coverage</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
          The game we cover.
        </h2>

        <div className="mt-14 flex flex-wrap gap-3">
          {coverageAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border hairline px-5 py-3 text-sm text-ink/90 transition-colors hover:border-electric hover:text-electric"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
