"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Tx = { id: string; ts: string; hash: string }

export default function BlockchainPage() {
  const [loading, setLoading] = useState(false)
  const [txs, setTxs] = useState<Tx[]>([
    { id: "DN-1001", ts: "2025-08-10 14:32", hash: "0xa1b2c3d4" },
    { id: "DN-1002", ts: "2025-08-11 10:14", hash: "0x9ec1d2aa" },
  ])

  const record = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    const id = "DN-" + (1000 + txs.length + 1)
    setTxs([
      {
        id,
        ts: new Date().toISOString().slice(0, 16).replace("T", " "),
        hash: "0x" + Math.random().toString(16).slice(2, 10),
      },
      ...txs,
    ])
    setLoading(false)
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Transaction Recording</h1>
        <p className="text-sm text-muted-foreground">Monitor transactions with digital receipts.</p>
      </div>

      <div className="rounded-xl border border-white/10 p-4 bg-white/5 backdrop-blur">
        <div className="text-sm text-muted-foreground">Transaction Status</div>
        <motion.div
          animate={{ width: loading ? "100%" : "0%" }}
          transition={{ duration: 1.0 }}
          className="mt-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
        />
        <p className="mt-2 text-xs">{loading ? "Processing transaction…" : "Awaiting transaction"}</p>
        <div className="mt-3">
          <Button onClick={record} disabled={loading} className="bg-cyan-600 hover:bg-cyan-700">
            {loading ? "Processing…" : "Record Transaction"}
          </Button>
        </div>
      </div>

      <div className="grid gap-3">
        {txs.map((t, i) => (
          <motion.div
            key={t.hash + i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur p-4"
          >
            <div className="text-sm font-medium">Transaction {t.id}</div>
            <div className="text-xs text-muted-foreground">{t.ts}</div>
            <a
              href="https://mumbai.polygonscan.com/"
              target="_blank"
              className="text-cyan-400 underline text-sm mt-1 inline-block"
              rel="noreferrer"
            >
              {t.hash}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
