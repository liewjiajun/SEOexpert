# Gen Z Luxury Redesign: Visual Examples

> Detailed visual mockups, code examples, and before/after comparisons for the SEOExpert website overhaul.

---

## Table of Contents

1. [Hero Section Transformation](#1-hero-section-transformation)
2. [Service Cards Transformation](#2-service-cards-transformation)
3. [Stats Section Transformation](#3-stats-section-transformation)
4. [Testimonials - TikTok-Style Swipe](#4-testimonials---tiktok-style-swipe)
5. [Custom Cursor Effect](#5-custom-cursor-effect)
6. [Page Transition Animation](#6-page-transition-animation)
7. [Loading Screen](#7-loading-screen)
8. [Color Palette Comparison](#8-color-palette-comparison)
9. [Summary: Key Visual Differences](#9-summary-key-visual-differences)

---

## 1. Hero Section Transformation

### Current State

```
┌─────────────────────────────────────────────────────────────────┐
│  ○ ○ ○                                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   [Digital Marketing Agency]          ┌─────────────────────┐  │
│                                        │                     │  │
│   Marketing that works,                │    📸 Team Photo    │  │
│   from anywhere                        │    (static image)   │  │
│   ~~~~~~~~~~~~~                        │                     │  │
│                                        │  ┌───────────────┐  │  │
│   Results-driven digital marketing     │  │ 🌍 100% Remote│  │  │
│   for businesses that value quality    │  └───────────────┘  │  │
│                                        └─────────────────────┘  │
│   [Get Started →]  [Our Services]                               │
│                                                                 │
│   ◯ blob    ◯ blob    ◯ blob  (subtle floating)                │
└─────────────────────────────────────────────────────────────────┘
```

### New Gen Z Luxury Version

```
┌─────────────────────────────────────────────────────────────────┐
│                    ✦ CUSTOM CURSOR FOLLOWS MOUSE ✦              │
├─────────────────────────────────────────────────────────────────┤
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓░░░░░░░ │
│ ░░▓███▓░░░  3D PARTICLE FIELD / WEBGL BACKGROUND  ░▓███▓░░░░░░ │
│ ░░░▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓░░░░░░░ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                 │
│                    ╔═══════════════════╗                        │
│                    ║ Digital Marketing ║  ← badge pulses        │
│                    ╚═══════════════════╝                        │
│                                                                 │
│               W e   M a k e   B r a n d s                       │
│               ↑ letters animate in one-by-one                   │
│                                                                 │
│               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                          │
│               ██ Go Viral ██  ← typewriter cycles:              │
│               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  "Dominate" / "Unforgettable"     │
│               (gradient text with glow)                         │
│                                                                 │
│           ┌──────────────────┐  ┌──────────────────┐            │
│           │ ✨ Start Journey │  │   View Our Work  │            │
│           └──────────────────┘  └──────────────────┘            │
│            ↑ magnetic button     ↑ glass button                 │
│            (follows cursor)      (blur + border)                │
│                                                                 │
│                         ◇                                       │
│                         ◇  ← scroll indicator bounces           │
│                         ▽                                       │
└─────────────────────────────────────────────────────────────────┘
```

### Code Example - Immersive Hero

```tsx
// components/sections/HeroImmersive.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Float, MeshDistortMaterial } from '@react-three/drei'
import { TypeAnimation } from 'react-type-animation'

// 3D Background Scene
function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Ambient particles */}
      <Sparkles
        count={300}
        scale={15}
        size={2}
        speed={0.3}
        color="#8B5CF6"
      />

      {/* Floating geometric shape */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 0, -2]}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#8B5CF6"
            emissive="#EC4899"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Second floating shape */}
      <Float speed={1.5} rotationIntensity={0.3}>
        <mesh position={[-3, -1, -3]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#EC4899"
            emissive="#8B5CF6"
            emissiveIntensity={0.2}
            wireframe
          />
        </mesh>
      </Float>
    </Canvas>
  )
}

// Magnetic Button Component
function MagneticButton({ children, className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setPosition({
      x: (clientX - left - width / 2) * 0.35,
      y: (clientY - top - height / 2) * 0.35
    })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export function HeroImmersive() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, 100])

  return (
    <section className="relative h-screen overflow-hidden bg-[#0F0A1A]">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-80">
        <HeroScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0A1A]/50 to-[#0F0A1A]" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6"
        style={{ opacity, y }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            Digital Marketing Agency
          </span>
        </motion.div>

        {/* Main Heading - Staggered Letter Animation */}
        <motion.h1
          className="mt-8 text-center font-display text-5xl font-bold text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span className="block">
            {"We Make Brands".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.6 + i * 0.03,
                  type: "spring",
                  stiffness: 100
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          {/* Typewriter Effect */}
          <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'Go Viral',
                2500,
                'Dominate',
                2500,
                'Unforgettable',
                2500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 max-w-md text-center text-lg text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          SEO, Ads, Social—engineered for the algorithm age.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <MagneticButton className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow hover:shadow-[0_0_50px_rgba(139,92,246,0.7)]">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </MagneticButton>

          <MagneticButton className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            View Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/20 p-2">
          <motion.div
            className="h-2 w-2 rounded-full bg-violet-400"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
```

---

## 2. Service Cards Transformation

### Current State

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│                 │  │                 │  │                 │
│      🎯         │  │      📊         │  │      📱         │
│                 │  │                 │  │                 │
│   SEO Service   │  │   Analytics     │  │  Social Media   │
│                 │  │                 │  │                 │
│   Description   │  │   Description   │  │   Description   │
│   text here...  │  │   text here...  │  │   text here...  │
│                 │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
     ↑ hover: lifts up slightly
```

### New Gen Z Luxury Version

```
                    ← Mouse position tracked

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    ╔═══════════════════╗                                    │
│   ╱│                   │╲  ← 3D tilt follows cursor         │
│  ╱ │    ◉ ─ ─ ─ ─ ─   │ ╲                                  │
│ │  │    │           │  │  │    GLOW follows                │
│ │  │    │  🎯       │  │  │    mouse position              │
│ │  │    │  SEO      │  │  │    within card                 │
│ │  │    │           │  │  │                                │
│ │  │    │  Dominate │  │  │    Floating icon               │
│ │  │    │  search   │  │  │    (translateZ: 50px)          │
│ │  │    │           │  │  │                                │
│  ╲ │    ─ ─ ─ ─ ─ ─   │ ╱                                  │
│   ╲│                   │╱                                   │
│    ╚═══════════════════╝                                    │
│                                                             │
│      Gradient border pulses               Neon glow edge    │
└─────────────────────────────────────────────────────────────┘
```

### Code Example - 3D Tilt Card

```tsx
// components/ui/TiltCard.tsx
'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  icon: React.ReactNode
  title: string
  description: string
}

export function TiltCard({ icon, title, description }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Mouse position relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Transform mouse position to rotation
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  // Glow position
  const glowX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className="group relative"
    >
      {/* Gradient Border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 opacity-50 blur-sm transition-opacity group-hover:opacity-100" />

      {/* Card Body */}
      <div className="relative h-80 overflow-hidden rounded-2xl bg-[#1A1427] p-8">
        {/* Dynamic Glow Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${glowX} ${glowY}, rgba(139, 92, 246, 0.15), transparent 60%)`,
          }}
        />

        {/* Floating Icon - pops out in 3D */}
        <motion.div
          className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-4 shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          style={{ transform: "translateZ(50px)" }}
        >
          {icon}
        </motion.div>

        {/* Content - slightly forward */}
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-8 right-8 text-violet-400"
          style={{ transform: "translateZ(40px)" }}
          initial={{ x: 0, opacity: 0 }}
          whileHover={{ x: 5 }}
          animate={{ opacity: 1 }}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>

        {/* Corner Accent */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
    </motion.div>
  )
}
```

---

## 3. Stats Section Transformation

### Current State

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│      500+              $12M+              98%              50+  │
│    Projects         Revenue           Retention          Team  │
│                                                                 │
│    (static numbers)                                             │
└─────────────────────────────────────────────────────────────────┘
```

### New Gen Z Luxury Version

```
┌─────────────────────────────────────────────────────────────────┐
│  🎊 CONFETTI BURST WHEN COUNTERS FINISH 🎊                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐     │
│   │ 0→500+  │    │ 0→$12M+ │    │ 0→98%   │    │ 0→50+   │     │
│   │ ████░░░ │    │ █████░░ │    │ ██████░ │    │ ███████ │     │
│   │Projects │    │ Revenue │    │Retention│    │  Team   │     │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘     │
│    ↑ counts up    ↑ counts up    ↑ counts up   ↑ counts up     │
│    with spring    (staggered     (2 second     (spring         │
│    physics        delay)         duration)     overshoot)      │
│                                                                 │
│   ══════════════════════════════════════════════════════════   │
│   Progress bar fills as you scroll into view                    │
│   ══════════════════════════════════════════════════════════   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Code Example - Animated Stats

```tsx
// components/sections/StatsAnimated.tsx
'use client'

import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Confetti from 'react-confetti'

function AnimatedNumber({ value, suffix = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const spring = useSpring(count, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => count.set(value), delay)
    }
  }, [isInView, value, delay])

  useEffect(() => {
    spring.on("change", (v) => setDisplay(Math.round(v)))
  }, [spring])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsAnimated() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (isInView) {
      // Trigger confetti after counters finish
      const timer = setTimeout(() => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const stats = [
    { value: 500, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
    { value: 12, suffix: 'M+', label: 'Revenue Generated', icon: '💰' },
    { value: 98, suffix: '%', label: 'Client Retention', icon: '🤝' },
    { value: 50, suffix: '+', label: 'Team Members', icon: '👥' },
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0F0A1A] py-24">
      {/* Confetti Celebration */}
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1200}
          height={400}
          recycle={false}
          numberOfPieces={150}
          colors={['#8B5CF6', '#EC4899', '#A78BFA', '#F472B6', '#84CC16']}
          gravity={0.3}
        />
      )}

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            The Numbers
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Results That <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Icon */}
                <span className="mb-4 block text-3xl">{stat.icon}</span>

                {/* Number */}
                <div className="text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      delay={i * 200}
                    />
                  </span>
                </div>

                {/* Label */}
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>

                {/* Progress Bar */}
                <motion.div
                  className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 4. Testimonials - TikTok-Style Swipe

### Current State

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   "Great service!"        "Amazing team!"        "Loved it!"    │
│   - John D.               - Sarah M.             - Mike T.      │
│                                                                 │
│   (static grid layout)                                          │
└─────────────────────────────────────────────────────────────────┘
```

### New Gen Z Luxury Version

```
┌─────────────────────────────────────────────────────────────────┐
│                    What They're Saying                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ← SWIPE →                                    │
│                                                                 │
│              ┌─────────────────────┐                            │
│           ┌──┤                     ├──┐                         │
│        ┌──┤  │   ┌────┐           │  ├──┐  ← Stacked cards     │
│        │  │  │   │ 👤 │  John D.  │  │  │    (deck effect)     │
│        │  │  │   └────┘  CEO      │  │  │                      │
│        │  │  │                     │  │  │                      │
│        │  │  │   "This team       │  │  │                      │
│        │  │  │   transformed our   │  │  │                      │
│        │  │  │   entire digital    │  │  │                      │
│        │  │  │   presence!"        │  │  │                      │
│        │  │  │                     │  │  │                      │
│        │  │  │   ★★★★★            │  │  │                      │
│        └──┤  │                     │  ├──┘                      │
│           └──┤                     ├──┘                         │
│              └─────────────────────┘                            │
│                         │                                       │
│                    drag to swipe                                │
│                                                                 │
│                    ○ ○ ● ○ ○  ← progress dots                  │
└─────────────────────────────────────────────────────────────────┘
```

### Code Example - Swipeable Cards

```tsx
// components/sections/TestimonialsSwipe.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/100?img=1",
    quote: "They didn't just meet our goals—they redefined what we thought was possible. Our traffic increased 340% in 3 months.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLab",
    avatar: "https://i.pravatar.cc/100?img=2",
    quote: "Finally, a team that speaks our language. No corporate BS, just results. Best decision we made this year.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, Velocity",
    avatar: "https://i.pravatar.cc/100?img=3",
    quote: "The ROI speaks for itself. We've 5x'd our lead generation while cutting ad spend by 40%.",
    rating: 5
  },
]

export function TestimonialsSwipe() {
  return (
    <section className="relative overflow-hidden bg-[#1A1427] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            What They're Saying
          </h2>
          <p className="mt-4 text-white/50">Swipe to explore</p>
        </motion.div>

        {/* Swiper Container */}
        <div className="mx-auto max-w-sm">
          <Swiper
            effect="cards"
            grabCursor
            modules={[EffectCards, Pagination]}
            pagination={{ clickable: true }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Avatar & Info */}
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full border-2 border-violet-500/50"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/50">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-lg leading-relaxed text-white/80">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex gap-1 text-xl text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          .testimonial-swiper {
            padding: 20px 0 60px;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.3);
            width: 10px;
            height: 10px;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(to right, #8B5CF6, #EC4899);
            width: 24px;
            border-radius: 5px;
          }
        `}</style>
      </div>
    </section>
  )
}
```

---

## 5. Custom Cursor Effect

### Visual Representation

```
Normal cursor:              Hovering on button:

    ○  ←small dot              ╭───────────────╮
   ( )  ←outer ring            │   ●           │  ← cursor grows
                               │  (●)  Click!  │     and shows label
                               │               │
                               ╰───────────────╯

Hovering on link:           Hovering on image:

      ○                           ╭─────╮
     /│\  ← arrow appears         │  ⊕  │ ← expand icon
     / \                          ╰─────╯
```

### Code Example

```tsx
// components/ui/CustomCursor.tsx
'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    // Track hoverable elements
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true)
          setCursorText(el.getAttribute('data-cursor') || '')
        })
        el.addEventListener('mouseleave', () => {
          setIsHovering(false)
          setCursorText('')
        })
      })
    }

    window.addEventListener('mousemove', moveCursor)
    addHoverListeners()

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-violet-500"
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-medium text-violet-400"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-violet-500 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
```

---

## 6. Page Transition Animation

### Visual Flow

```
PAGE A                      TRANSITION                    PAGE B
┌──────────┐               ┌──────────┐                ┌──────────┐
│          │               │▓▓▓▓▓▓▓▓▓▓│ ← wipe from   │          │
│  Page A  │    click →    │▓▓▓▓▓▓▓▓▓▓│   bottom      │  Page B  │
│ content  │               │▓▓▓▓▓▓▓▓▓▓│               │ content  │
│          │               │░░░░░░░░░░│               │          │
│          │               │          │ ← reveals      │          │
└──────────┘               └──────────┘   new page     └──────────┘

Duration: 0.5s              Overlay: gradient purple → pink
```

### Code Example

```tsx
// components/layout/PageTransition.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Page Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>

        {/* Slide-in overlay */}
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-violet-600 to-fuchsia-600"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ originY: 1 }}
        />

        {/* Slide-out overlay */}
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-violet-600 to-fuchsia-600"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
```

---

## 7. Loading Screen

### Visual Sequence

```
Step 1 (0-0.5s)           Step 2 (0.5-1.5s)         Step 3 (1.5-2s)
┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│              │          │              │          │              │
│              │          │    ╭───╮     │          │              │
│     ◯        │          │   ╱     ╲    │          │   SEOexpert  │
│   (pulsing)  │          │  │  ◉◉◉  │   │          │              │
│              │          │   ╲     ╱    │          │   ████████   │
│              │          │    ╰───╯     │          │   Loading... │
│              │          │  (morphing)  │          │              │
└──────────────┘          └──────────────┘          └──────────────┘

Step 4 (2s)
┌──────────────┐
│              │
│              │   ← slides up
│   ▲▲▲▲▲▲▲▲   │     to reveal
│              │     page
│              │
└──────────────┘
```

### Code Example

```tsx
// components/layout/LoadingScreen.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F0A1A]"
        >
          {/* Animated Logo */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_60px_rgba(139,92,246,0.5)]" />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 text-2xl font-bold text-white"
          >
            SEO<span className="text-violet-400">expert</span>
          </motion.h1>

          {/* Progress Bar */}
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-sm text-white/50"
          >
            {progress < 100 ? 'Loading experience...' : 'Ready!'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

---

## 8. Color Palette Comparison

### Before (Current)

```
┌────────────────────────────────────────────────────────────┐
│  CURRENT PALETTE                                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Primary:   ████████  Violet #8B5CF6 (good but muted)     │
│  Secondary: ████████  Fuchsia #D946EF                      │
│  Accent:    ████████  Coral #FB7185                        │
│  Background:████████  Off-white #FAFAFF (too light)       │
│  Text:      ████████  Ink #1E1B4B                          │
│                                                            │
│  Feeling: Professional, clean, but not exciting            │
└────────────────────────────────────────────────────────────┘
```

### After (Gen Z Luxury)

```
┌────────────────────────────────────────────────────────────┐
│  NEW "NEON LUXE" PALETTE                                   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Primary:   ████████  Electric Violet #7C3AED (more sat)  │
│  Hot Pink:  ████████  #EC4899 (Gen Z energy)              │
│  Cyber Lime:████████  #A3E635 (unexpected luxury)         │
│  Electric:  ████████  #38BDF8 (accent pop)                │
│  Background:████████  Deep Ink #0F0A1A (premium dark)     │
│  Glass:     ░░░░░░░░  rgba(255,255,255,0.05)              │
│                                                            │
│  GLOW EFFECTS:                                             │
│  ▓▓▓▓▓▓▓▓▓▓  0 0 60px rgba(139,92,246,0.5)               │
│  ▓▓▓▓▓▓▓▓▓▓  0 0 60px rgba(236,72,153,0.5)               │
│                                                            │
│  Feeling: Immersive, premium, TikTok-ready, memorable      │
└────────────────────────────────────────────────────────────┘
```

### CSS Variables

```css
/* New Color System: "Neon Luxe" */
:root {
  /* Primary - Electric Violet (intensified) */
  --violet-400: #A78BFA;
  --violet-500: #8B5CF6;
  --violet-600: #7C3AED;

  /* Secondary - Hot Pink (Gen Z energy) */
  --pink-400: #F472B6;
  --pink-500: #EC4899;
  --pink-600: #DB2777;

  /* Accent - Cyber Lime (unexpected luxury) */
  --lime-400: #A3E635;
  --lime-500: #84CC16;

  /* Accent - Electric Blue */
  --blue-400: #38BDF8;
  --blue-500: #0EA5E9;

  /* Neutrals - Warmer Blacks */
  --ink-900: #0F0A1A;  /* Almost black with purple tint */
  --ink-800: #1A1427;
  --ink-700: #2D2640;

  /* Glass - More visible */
  --glass-white: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);

  /* Neon Glows */
  --glow-violet: 0 0 60px rgba(139, 92, 246, 0.5);
  --glow-pink: 0 0 60px rgba(236, 72, 153, 0.5);
  --glow-lime: 0 0 60px rgba(163, 230, 53, 0.4);
}
```

---

## 9. Summary: Key Visual Differences

| Element | Current | Gen Z Luxury |
|---------|---------|--------------|
| **Background** | Light off-white | Deep dark with glows |
| **Animations** | Subtle CSS fades | Spring physics, 3D transforms |
| **Cards** | Flat with lift hover | 3D tilt with cursor tracking |
| **Cursor** | Default | Custom magnetic cursor |
| **Stats** | Static numbers | Animated counters + confetti |
| **Testimonials** | Grid layout | Swipeable card deck |
| **Hero** | Image + text | 3D WebGL scene + typewriter |
| **Navigation** | Standard menu | Magnetic hover effects |
| **Transitions** | Instant page load | Cinematic wipe transitions |
| **Typography** | Static | Staggered letter animations |
| **Colors** | Muted palette | Neon glows on dark |

---

## Visual Transformation Summary

```
BEFORE                                 AFTER
──────────────────────────────────────────────────────────────

  ┌─────────────────┐                  ░░░░░░░░░░░░░░░░░░░░
  │                 │                  ░░ ◉ 3D PARTICLES ░░
  │  Static Hero    │        →         ░░    ✨ ✨ ✨      ░░
  │  with image     │                  ░░  TYPING TEXT   ░░
  │                 │                  ░░░░░░░░░░░░░░░░░░░░
  └─────────────────┘

  ┌───┐ ┌───┐ ┌───┐                   ╱───╲   ╱───╲   ╱───╲
  │   │ │   │ │   │        →         │ ◉ │  │ ◉ │  │ ◉ │
  │   │ │   │ │   │                   ╲───╱   ╲───╱   ╲───╱
  └───┘ └───┘ └───┘                   3D TILT CARDS
  Flat cards

  500+  $12M  98%                     ┌─ 0→500+ ─┐  🎊
  ──────────────────       →          │ ████████ │ CONFETTI!
  Static numbers                      └──────────┘
                                      Animated counters

  ○ Default cursor                    ◉ ← Magnetic cursor
         │                 →          ╰─● follows + grows
         ▼

  Clean & Professional                Immersive & Memorable

──────────────────────────────────────────────────────────────
```

The transformation creates a **"dopamine-driven luxury experience"** that captures Gen Z attention while maintaining premium brand positioning.

---

*Visual Examples Document for SEOExpert Gen Z Luxury Redesign*
