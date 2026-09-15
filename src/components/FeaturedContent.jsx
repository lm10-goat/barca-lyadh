import { Heart, MessageCircle } from 'lucide-react'
import { featuredContent } from '../data/content.js'
import { images } from '../data/images.js'
import ImagePanel from './ImagePanel.jsx'

export default function FeaturedContent() {
  return (
    <section className="border-b hairline bg-base py-24 md:py-32">
      <div className="container-content">
        <span className="label text-electric">Featured</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
          Recent stories.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredContent.map((post) => (
            <div
              key={post.id}
              className="group block overflow-hidden rounded-2xl border hairline"
            >
              <ImagePanel
                src={images.featured[post.id]}
                alt={post.headline}
                variant={post.id.length % 2 ? 'blue' : 'crimson'}
                className="aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="label rounded-full bg-base/70 px-3 py-1.5 text-ink backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="text-xs text-ink/60">{post.date}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl leading-tight text-ink transition-transform duration-300 group-hover:-translate-y-1">
                    {post.headline}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink/70">
                    <span className="flex items-center gap-1.5">
                      <Heart size={13} strokeWidth={1.8} /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} strokeWidth={1.8} /> {post.comments}
                    </span>
                  </div>
                </div>
              </ImagePanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
