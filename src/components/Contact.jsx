import { useState } from 'react'
import * as Icons from 'lucide-react'
import { Copy, Check, Send } from 'lucide-react'
import { site } from '../data/site.js'
import { contactChannels, budgetRanges, campaignTypes } from '../data/partnerships.js'

const initialForm = {
  name: '',
  company: '',
  email: '',
  budget: budgetRanges[0],
  campaignType: campaignTypes[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [copied, setCopied] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.businessEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — silently ignore, the address is
      // still visible and selectable on the page.
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // This is a static site with no backend, so submissions are handed
    // off to the visitor's own email client via a mailto: link.
    // To collect submissions without email, swap this for a
    // Formspree-compatible <form action="https://formspree.io/f/XXXX">.
    const subject = encodeURIComponent(`Partnership inquiry — ${form.company || form.name || 'New contact'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nBrand / Company: ${form.company}\nEmail: ${form.email}\nBudget range: ${form.budget}\nCampaign type: ${form.campaignType}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${site.businessEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-base py-24 md:py-32">
      <div className="container-content">
        <span className="label text-electric">Work with {site.brandName}</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-light leading-[1.08] text-ink md:text-5xl">
          Let's start a conversation.
        </h2>

        <div className="mt-16 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="space-y-8">
              {contactChannels.map((channel) => {
                const Icon = Icons[channel.icon] ?? Icons.Circle
                return (
                  <div key={channel.title} className="flex gap-4">
                    <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-crimson" />
                    <div>
                      <h3 className="font-display text-lg text-ink">{channel.title}</h3>
                      <p className="mt-1 text-sm text-muted">{channel.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 rounded-2xl border hairline bg-surface p-6">
              <p className="label text-faint">Prefer email? Contact us directly</p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="truncate font-display text-lg text-ink">{site.businessEmail}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border hairline text-muted transition-colors hover:border-electric hover:text-electric"
                  aria-label="Copy business email"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Brand / company">
                <input
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  className="input"
                  placeholder="Your brand"
                />
              </Field>
              <Field label="Email" full>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="input"
                  placeholder="you@brand.com"
                />
              </Field>
              <Field label="Budget range">
                <select value={form.budget} onChange={update('budget')} className="input">
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Campaign type">
                <select value={form.campaignType} onChange={update('campaignType')} className="input">
                  {campaignTypes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message" full>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className="input resize-none"
                  placeholder="Tell us about the campaign you have in mind"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              <Send size={15} strokeWidth={1.8} />
              Send inquiry
            </button>
            <p className="mt-3 text-xs text-faint">
              Opens your email client with this message addressed to {site.businessEmail}.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="label mb-2 block text-faint">{label}</span>
      {children}
    </label>
  )
}
