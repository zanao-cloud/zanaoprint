'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    // Start offscreen so there's no flash at (0,0)
    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let hovering = false
    let rafId: number
    let hasMoved = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      if (!hasMoved) {
        // Snap ring to cursor on first move to avoid it sliding from corner
        ringX = mouseX
        ringY = mouseY
        hasMoved = true
        setVisible(true)
      }
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

    document.querySelectorAll('a, button, input, textarea, select, label').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      document.querySelectorAll('a, button, input, textarea, select, label').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-cyan pointer-events-none z-[99999]"
        style={{
          willChange: 'transform',
          boxShadow: '0 0 6px #00E5FF',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/60 pointer-events-none z-[99998]"
        style={{
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s, transform 0s',
        }}
        aria-hidden="true"
      />
    </>
  )
}
