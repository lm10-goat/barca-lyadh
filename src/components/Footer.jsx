import { Instagram } from 'lucide-react'
import { site } from '../data/site.js'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-base pt-20">
      <div className="container-content">
        <div className="grid gap-12 border-b hairline pb-16 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <span className="font-display text-2xl text-ink">{site.brandName}</span>
            <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
          </div>

          <div>
            <p className="label mb-4 text-faint">Navigation</p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-faint">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Instagram size={14} strokeWidth={1.8} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.businessEmail}`}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {site.businessEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.brandName}. All rights reserved.
          </p>
          <p className="max-w-lg sm:text-right">
            {site.brandName} is an independent football media brand and is
            not affiliated with FC Barcelona unless explicitly stated.
          </p>
        </div>
      </div>
    </footer>
  )
}
