import { useEffect, useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'
import { site } from '../data/site.js'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b hairline' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-[72px] items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-tight text-ink">
          {site.brandName}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border hairline text-ink transition-colors hover:border-electric hover:text-electric"
            aria-label={`${site.brandName} on Instagram`}
          >
            <Instagram size={17} strokeWidth={1.6} />
          </a>
          <a
            href="#contact"
            className="label rounded-full bg-ink px-5 py-2.5 text-base transition-transform hover:-translate-y-0.5"
          >
            Work with us
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t hairline bg-base px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b hairline py-4 font-display text-2xl text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border hairline text-ink"
              aria-label={`${site.brandName} on Instagram`}
            >
              <Instagram size={18} strokeWidth={1.6} />
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="label flex-1 rounded-full bg-ink px-5 py-3 text-center text-base"
            >
              Work with us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
