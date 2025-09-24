"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScannerModal } from "@/components/scanner-modal"
import { useToast } from "@/hooks/use-toast"

type Donation = {
  id: string
  name: string
  qty: number
  status: "Pending" | "Approved" | "Delivered"
  hash?: string
}

export default function DonorPage() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: "", expiry: "", qty: 1 })
  const [rows, setRows] = useState<Donation[]>([
    { id: "DN-1021", name: "Amoxicillin", qty: 2, status: "Approved", hash: "0xabcd1234" },
    { id: "DN-1022", name: "Paracetamol", qty: 5, status: "Pending" },
  ])

  const submit = () => {
    const id = `DN-${Math.floor(1000 + Math.random() * 9000)}`
    setRows([{ id, name: form.name || "New Medicine", qty: Number(form.qty) || 1, status: "Pending" }, ...rows])
    toast({ title: "Donation submitted", description: "Your donation is pending NGO approval." })
    setForm({ name: "", expiry: "", qty: 1 })
  }

  const verify = (id: string) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, hash: "0x" + Math.random().toString(16).slice(2, 10) } : r)))
    toast({ title: "Receipt recorded", description: "A verification receipt was generated." })
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Donor</h1>
        <p className="text-sm text-muted-foreground">Upload medicines and track their status.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="text-sm">Name</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Paracetamol 500mg"
            />
          </div>
          <div>
            <label className="text-sm">Expiry</label>
            <Input
              value={form.expiry}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              placeholder="YYYY-MM"
            />
          </div>
          <div>
            <label className="text-sm">Quantity</label>
            <Input
              type="number"
              min={1}
              value={form.qty}
              onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={submit} className="bg-cyan-600 hover:bg-cyan-700">
            Add Medicine
          </Button>
          <Button variant="secondary" onClick={() => setOpen(true)} className="backdrop-blur-md">
            Scan Barcode
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Qty</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Receipt</th>
              <th className="text-left p-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-white/10">
                <td className="p-3">{r.id}</td>
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.qty}</td>
                <td className="p-3">{r.status}</td>
                <td className="p-3">
                  {r.hash ? (
                    <a
                      href="https://mumbai.polygonscan.com/"
                      target="_blank"
                      className="text-cyan-400 underline"
                      rel="noreferrer"
                    >
                      {r.hash}
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-3">
                  <Button size="sm" variant="outline" onClick={() => verify(r.id)}>
                    Verify Securely
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ScannerModal
        open={open}
        onOpenChange={setOpen}
        onResult={(res) => {
          setForm((f) => ({ ...f, name: res.name, qty: res.qty }))
        }}
      />
    </div>
  )
}
