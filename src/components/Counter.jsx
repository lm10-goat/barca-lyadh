import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Animates the numeric portion of a placeholder value like "XXK+" is not
// meaningful (it's letters), so this simply reveals the value with a
// count-style opacity/blur transition once it scrolls into view — a
// framework for real animated digits once real numbers are added.
export default function Counter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="border-t hairline pt-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-light text-ink md:text-5xl"
      >
        {value}
      </motion.div>
      <div className="label mt-2 text-faint">{label}</div>
    </div>
  )
}
