"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Pill, Stethoscope, Syringe } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 pb-10 md:pt-20">
      <div className="relative">
        {/* blurred gradient accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-20 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-500/30 to-emerald-400/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-12 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-400/30 to-blue-500/30 blur-3xl"
        />
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">MediConnect</h1>
          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            Healing Hands, Connected Hearts. Donate unused medicines or request what you need—securely and responsibly.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/donate">
                <Button size="lg" className="gap-2">
                  <Pill className="size-4" />
                  Donate Medicines
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/request">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Stethoscope className="size-4" />
                  Request Medicines
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Syringe className="size-4 text-green-600 dark:text-green-500" /> Safe & Ethical
            </div>
            <div className="flex items-center gap-2">
              <Pill className="size-4 text-sky-600 dark:text-sky-400" /> Medicine-first Design
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border bg-card p-4 shadow-sm transition-transform hover:scale-[1.02]">
              <Image
                src={"/placeholder.svg?height=140&width=220&query=medicine%20bottles"}
                alt="Medicine bottles"
                width={220}
                height={140}
                className="w-full rounded-lg"
              />
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-sm transition-transform hover:scale-[1.02]">
              <Image
                src={"/placeholder.svg?height=140&width=220&query=pills%20and%20capsules"}
                alt="Pills and capsules"
                width={220}
                height={140}
                className="w-full rounded-lg"
              />
            </div>
            <div className="rounded-xl border bg-card p-4 shadow-sm transition-transform hover:scale-[1.02]">
              <Image
                src={"/placeholder.svg?height=140&width=220&query=health%20symbols"}
                alt="Health symbols"
                width={220}
                height={140}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
