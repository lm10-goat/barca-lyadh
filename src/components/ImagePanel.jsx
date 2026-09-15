import { useState } from 'react'

// Renders a real image if it loads successfully, otherwise falls back
// to a generated dark gradient panel so the layout never breaks while
// you're still sourcing photography.
export default function ImagePanel({ src, alt = '', className = '', variant = 'blue', children }) {
  const [failed, setFailed] = useState(!src)

  const gradients = {
    blue: 'from-[#101835] via-[#0B0D12] to-[#07080A]',
    crimson: 'from-[#2A0B14] via-[#12090C] to-[#07080A]',
    mixed: 'from-[#101835] via-[#1a0b14] to-[#07080A]',
  }

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${gradients[variant]} ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, transparent, transparent 38px, rgba(241,239,233,0.6) 39px)',
          }}
        />
        <div className="grain" />
        {children}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
      {children}
    </div>
  )
}
