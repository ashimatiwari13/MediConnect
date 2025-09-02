"use client"

import useSWR from "swr"
import { motion } from "framer-motion"
import { Activity, Users, HeartHandshake, Building2 } from "lucide-react"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const items = [
  { key: "totalDonations", label: "Medicines Donated", Icon: Activity },
  { key: "livesImpacted", label: "Lives Impacted", Icon: HeartHandshake },
  { key: "activeDonors", label: "Active Donors", Icon: Users },
  { key: "ngoPartners", label: "NGO Partners", Icon: Building2 },
] as const

export function StatsCounters() {
  const { data } = useSWR("/api/stats", fetcher)

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items.map(({ key, label, Icon }, idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{label}</p>
              <Icon className="size-5 text-primary" />
            </div>
            <p className="mt-2 text-2xl font-semibold">{data ? data[key] : "—"}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
