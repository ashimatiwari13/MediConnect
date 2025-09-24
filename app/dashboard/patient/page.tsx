"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

type Med = { id: string; name: string; qty: number; expiry: string }

export default function PatientPage() {
  const { toast } = useToast()
  const [query, setQuery] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const meds: Med[] = [
    { id: "MD-3001", name: "Paracetamol", qty: 12, expiry: "2026-01" },
    { id: "MD-3002", name: "Omeprazole", qty: 4, expiry: "2025-10" },
  ]
  const filtered = meds.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Patient</h1>
        <p className="text-sm text-muted-foreground">Browse medicines and request with a prescription.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Input placeholder="Search medicine..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <Input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <Button
          onClick={() => toast({ title: "Prescription uploaded", description: file?.name || "No file selected" })}
          className="bg-cyan-600 hover:bg-cyan-700"
        >
          Upload Prescription
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((m) => (
          <div key={m.id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="font-medium">{m.name}</div>
            <div className="text-xs text-muted-foreground">
              Expiry {m.expiry} • Qty {m.qty}
            </div>
            <div className="mt-3">
              <Button size="sm" variant="secondary" className="backdrop-blur-md">
                Request
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
