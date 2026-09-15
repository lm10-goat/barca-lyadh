import { site } from '../data/site.js'
import { images } from '../data/images.js'
import ImagePanel from './ImagePanel.jsx'

const snapshot = [
  { label: 'Brand', value: site.brandName },
  { label: 'Platform', value: 'Instagram' },
  { label: 'Category', value: 'Football media' },
  { label: 'Focus', value: 'FC Barcelona + football culture' },
]

export default function About() {
  return (
    <section id="about" className="border-b hairline bg-base py-24 md:py-32">
      <div className="container-content grid gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="label text-crimson">About</span>
          <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
            More than a football page.
          </h2>

          <div className="mt-10 grid gap-8 text-[1.02rem] leading-relaxed text-muted sm:grid-cols-2">
            <p>
              {site.brandName} is a football-focused digital media platform built
              around FC Barcelona — match reactions, player stories, football
              culture and the debates that come with all of it.
            </p>
            <p>
              Every post is built Instagram-first: visual, fast and made for a
              growing audience of fans who follow the game closely and want
              something sharper than the standard highlight reel.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border hairline">
            <table className="w-full text-left">
              <tbody>
                {snapshot.map((row, i) => (
                  <tr key={row.label} className={i !== snapshot.length - 1 ? 'border-b hairline' : ''}>
                    <th scope="row" className="label w-40 px-6 py-4 font-normal text-faint">
                      {row.label}
                    </th>
                    <td className="px-6 py-4 font-display text-lg text-ink">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:col-span-5">
          <ImagePanel
            src={images.about}
            alt="Football culture and matchday editorial visual"
            variant="crimson"
            className="h-full min-h-[360px] rounded-2xl border hairline"
          />
        </div>
      </div>
    </section>
  )
}
