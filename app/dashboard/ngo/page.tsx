"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

type Med = { id: string; name: string; expiry: string; donor: string; status: "Available" | "Claimed" }

export default function NgoPage() {
  const [items, setItems] = useState<Med[]>([
    { id: "MD-2001", name: "Ibuprofen", expiry: "2026-05", donor: "John D", status: "Available" },
    { id: "MD-2002", name: "Cough Syrup", expiry: "2025-12", donor: "Alice W", status: "Available" },
  ])

  const claim = (id: string) => setItems((xs) => xs.map((x) => (x.id === id ? { ...x, status: "Claimed" } : x)))

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">NGO</h1>
        <p className="text-sm text-muted-foreground">Review and claim available medicines.</p>
      </div>

      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Expiry</th>
              <th className="text-left p-3">Donor</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r.id} className="border-t border-white/10">
                <td className="p-3">{r.id}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.expiry}</td>
                <td className="p-3">{r.donor}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3">
                  {r.status === "Available" ? (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => claim(r.id)}>
                      Claim
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">Claimed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
