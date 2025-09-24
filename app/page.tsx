"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/site/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"
import { StatsCounters } from "@/components/stats-counters"
import { SectionHeading } from "@/components/section-heading"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-balance text-4xl md:text-6xl font-bold tracking-tight">MediConnect</h1>
          <p className="text-pretty mt-4 text-base md:text-lg text-muted-foreground">Healing Hands, Connected Hearts</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/donate">
              <Button size="lg" className="">
                Donate Medicines
              </Button>
            </Link>
            <Link href="/request">
              <Button size="lg" variant="outline" className="bg-transparent">
                Request Medicines
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Real-time Updates", d: "Live activity powered by your backend." },
              { t: "Secure Verification", d: "Tamper-evident receipts for trust." },
              { t: "Nearby NGOs", d: "Find help around you with geolocation." },
            ].map((card, i) => (
              <motion.div
                key={card.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
              >
                <h3 className="font-semibold">{card.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{card.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <StatsCounters />

      <div className="relative z-10">
        <SectionHeading id="features" className="mt-2">
          Features
        </SectionHeading>
      </div>
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature title="Authentication" desc="Glassy, animated login with email, Google, and Wallet UI." />
          <Feature title="Role Dashboards" desc="Donor, NGO, and Patient experiences with tailored tooling." />
          <Feature title="Medicine Scanner" desc="Open camera modal to scan barcodes and autofill details." />
          <Feature title="Secure Tracking" desc="See verification receipts and delivery proofs." />
        </div>
      </section>

      <div className="relative z-10">
        <SectionHeading id="about">About</SectionHeading>
      </div>
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-4xl mx-auto grid gap-4 text-muted-foreground">
          <p>
            MediConnect is a community-driven platform to donate and request medicines securely and responsibly. We
            connect donors, NGOs, and patients while ensuring safety and transparency.
          </p>
          <p>
            Our mission is to reduce medicine waste and improve access to essential medications with verified flows and
            nearby assistance.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </motion.div>
  )
}
