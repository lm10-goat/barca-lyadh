import * as Icons from 'lucide-react'
import { partnershipTypes } from '../data/partnerships.js'
import { images } from '../data/images.js'
import ImagePanel from './ImagePanel.jsx'

export default function Partnerships() {
  return (
    <section id="partnerships" className="border-b hairline bg-base py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="label text-electric">For brands</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] text-ink md:text-5xl">
              Let's build something people remember.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted">
              BARCA_LYADH partners with brands that want to connect with
              football audiences through authentic, creative and
              social-first storytelling.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {partnershipTypes.map((item) => {
            const Icon = Icons[item.icon] ?? Icons.Circle
            return (
              <div
                key={item.title}
                className="group rounded-2xl border hairline bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40"
              >
                <Icon size={22} strokeWidth={1.5} className="text-crimson" />
                <h3 className="mt-6 font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            )
          })}
        </div>

        <ImagePanel
          src={images.partnerships}
          alt=""
          variant="mixed"
          className="mt-10 h-56 rounded-2xl border hairline md:h-72"
        />
      </div>
    </section>
  )
}
