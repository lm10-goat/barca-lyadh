import { motion } from 'framer-motion'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site.js'
import { images } from '../data/images.js'
import ImagePanel from './ImagePanel.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b hairline bg-base pt-[72px]">
      <div className="container-content grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24 lg:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="md:col-span-7"
        >
          <motion.span variants={fadeUp} custom={0} className="label mb-6 flex items-center gap-2 text-electric">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            {site.instagramHandle}
          </motion.span>

          <h1 className="font-display text-[13vw] font-light leading-[0.95] tracking-tightest text-ink sm:text-6xl md:text-[5.2rem] lg:text-[6rem]">
            <motion.span variants={fadeUp} custom={1} className="block">
              Football.
            </motion.span>
            <motion.span variants={fadeUp} custom={2} className="block text-muted">
              Beyond the 90.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-muted"
          >
            {site.description}
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              <Instagram size={16} strokeWidth={1.8} />
              Follow {site.instagramHandle}
            </a>
            <a
              href="#partnerships"
              className="group flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Work with us
              <ArrowUpRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <ImagePanel
            src={images.hero}
            alt="Cinematic football action shot"
            variant="mixed"
            className="aspect-[4/5] rounded-2xl border hairline"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
              <span className="label text-ink/80">Culture &amp; storytelling</span>
              <span className="h-2 w-2 rounded-full bg-crimson" />
            </div>
          </ImagePanel>
        </motion.div>
      </div>

      <div className="grain" />
    </section>
  )
}
