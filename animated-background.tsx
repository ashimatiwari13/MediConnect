"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Analogous green→cyan lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_30%_20%,rgba(34,197,94,0.10),transparent),radial-gradient(70%_70%_at_70%_30%,rgba(8,145,178,0.18),transparent)]" />
      <GradientSheen />
      <Particles />
    </div>
  )
}

function GradientSheen() {
  return (
    <div className="absolute inset-0 opacity-60 [background:conic-gradient(from_180deg_at_50%_50%,rgba(34,197,94,0.08)_0deg,rgba(8,145,178,0.18)_120deg,transparent_200deg)] animate-[spin_40s_linear_infinite]" />
  )
}

function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
    let width = 0
    let height = 0

    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0007,
      vy: (Math.random() - 0.5) * 0.0007,
      r: 1 + Math.random() * 1.5,
      o: 0.15 + Math.random() * 0.25,
    }))

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34,197,94,${p.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}
