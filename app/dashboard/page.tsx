"use client"

import useSWR from "swr"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type Stats = {
  donated: number
  available: number
  claimed: number
  verified: number
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function DashboardOverviewPage() {
  const { data, isLoading } = useSWR<Stats>("/api/stats", fetcher)
  const [query, setQuery] = useState("")

  const items = [
    { label: "Total Medicines Donated", key: "donated" as const, emoji: "✅" },
    { label: "Medicines Available", key: "available" as const, emoji: "💊" },
    { label: "Medicines Claimed", key: "claimed" as const, emoji: "🏥" },
    { label: "Receipts Generated", key: "verified" as const, emoji: "🔗" },
  ]

  // demo data (replace with API later)
  const demoRows = [
    { id: "DN-001", type: "Donation", medicine: "Amoxicillin 500mg", qty: 10, status: "Verified" },
    { id: "RQ-212", type: "Request", medicine: "Paracetamol 650mg", qty: 6, status: "Pending" },
    { id: "DN-145", type: "Donation", medicine: "Ibuprofen 200mg", qty: 20, status: "Claimed" },
    { id: "RQ-310", type: "Request", medicine: "Cough Syrup 100ml", qty: 2, status: "Matched" },
  ]
  const filtered = demoRows.filter(
    (r) =>
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.medicine.toLowerCase().includes(query.toLowerCase()) ||
      r.type.toLowerCase().includes(query.toLowerCase()) ||
      r.status.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4"
          >
            <div className="text-sm text-muted-foreground">{it.label}</div>
            <div className="mt-2 text-3xl font-bold">
              {isLoading ? "—" : (data?.[it.key] ?? 0)} <span className="text-base">{it.emoji}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">Submissions</h2>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ID, medicine, type, status…"
            className="max-w-xs"
            aria-label="Search submissions"
          />
        </div>

        <div className="mt-3 overflow-hidden rounded-xl border">
          <div className="grid grid-cols-4 bg-muted/40 px-4 py-2 text-sm font-medium">
            <div>ID</div>
            <div>Type</div>
            <div>Medicine / Qty</div>
            <div>Status</div>
          </div>
          <div className="divide-y">
            {filtered.map((row) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-4 items-center px-4 py-3 hover:bg-muted/30"
              >
                <div className="text-sm font-medium">{row.id}</div>
                <div className="text-sm">{row.type}</div>
                <div className="text-sm text-muted-foreground">
                  {row.medicine} <span className="text-foreground">·</span> {row.qty}
                </div>
                <div className="text-sm">{row.status}</div>
              </motion.div>
            ))}
            {filtered.length === 0 && <div className="px-4 py-6 text-sm text-muted-foreground">No results found.</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
