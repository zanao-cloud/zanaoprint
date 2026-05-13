'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setVisible(true)

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let hovering = false
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px) scale(${hovering ? 1.8 : 1})`
      rafId = requestAnimationFrame(animateRing)
    }

    const onEnter = () => { hovering = true; cursor.style.opacity = '0.4' }
    const onLeave = () => { hovering = false; cursor.style.opacity = '1' }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animateRing)

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-cyan pointer-events-none z-[99999]"
        style={{ willChange: 'transform', boxShadow: '0 0 6px #00E5FF' }}
        aria-hidden="true"
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/60 pointer-events-none z-[99998] transition-[opacity] duration-200"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />
    </>
  )
}
