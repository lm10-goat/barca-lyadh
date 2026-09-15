import * as Icons from 'lucide-react'
import { contentPillars } from '../data/content.js'

export default function ContentPillars() {
  return (
    <section id="content" className="border-b hairline bg-base py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label text-electric">What we create</span>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
              Six ways we tell the story.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            From matchday reactions to long-form opinion pieces — content built
            for how football fans actually scroll.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-line sm:grid-cols-2 lg:grid-cols-3">
          {contentPillars.map((item) => {
            const Icon = Icons[item.icon] ?? Icons.Circle
            return (
              <div
                key={item.number}
                className="group relative bg-base p-8 transition-colors duration-300 hover:bg-surface"
              >
                <div className="flex items-start justify-between">
                  <span className="label text-faint">{item.number}</span>
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-muted transition-colors duration-300 group-hover:text-electric"
                  />
                </div>
                <h3 className="mt-8 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
