"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Pill, User, Mail, FileUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function DonatePage() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      toast({ title: "Donation submitted", description: "Thank you for donating!" })
      ;(e.target as HTMLFormElement).reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Donate Medicines</CardTitle>
              <CardDescription>Share your unused, unexpired medicines to help others.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5" onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="size-4 text-primary" />
                    Name
                  </Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="size-4 text-primary" />
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="medicine" className="flex items-center gap-2">
                    <Pill className="size-4 text-primary" />
                    Medicine Name
                  </Label>
                  <Input id="medicine" name="medicine" required placeholder="e.g. Amoxicillin 500mg" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="qty">Quantity</Label>
                  <Input id="qty" name="quantity" type="number" min={1} required placeholder="e.g. 10" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expiry" className="flex items-center gap-2">
                    <CalendarIcon className="size-4 text-primary" />
                    Expiry Date
                  </Label>
                  <Input id="expiry" name="expiry" type="date" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="photo" className="flex items-center gap-2">
                    <FileUp className="size-4 text-primary" />
                    Prescription / Photo (optional)
                  </Label>
                  <Input id="photo" name="photo" type="file" accept="image/*" />
                </div>
                <Button type="submit" disabled={submitting} className="mt-2">
                  {submitting ? "Submitting..." : "Submit Donation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
