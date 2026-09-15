import * as Icons from 'lucide-react'
import { whyReasons } from '../data/partnerships.js'

export default function WhyUs() {
  return (
    <section className="border-b hairline bg-surface py-24 md:py-32">
      <div className="container-content">
        <span className="label text-crimson">Why BARCA_LYADH</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
          Built for partners who play the long game.
        </h2>

        <div className="mt-16 divide-y hairline border-t hairline">
          {whyReasons.map((item) => {
            const Icon = Icons[item.icon] ?? Icons.Circle
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:items-center sm:gap-6"
              >
                <div className="sm:col-span-1">
                  <Icon size={20} strokeWidth={1.5} className="text-electric" />
                </div>
                <h3 className="font-display text-xl text-ink sm:col-span-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted sm:col-span-7">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
