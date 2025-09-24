"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const simulate = async (label: string) => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    toast({ title: label, description: "Signed in successfully (demo)" })
    setLoading(false)
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_60%_at_20%_20%,rgba(8,145,178,0.15),transparent),radial-gradient(40%_60%_at_80%_80%,rgba(34,197,94,0.15),transparent)]" />

      <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col justify-center"
        >
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/medicine-donation-illustration.png"
              alt="Donating medicines illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Join MediConnect to donate, find, and verify life-saving medicines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6"
        >
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-1">Login to your account</p>

          <div className="mt-6 grid gap-3">
            <div className="grid gap-2">
              <label className="text-sm">Email</label>
              <Input placeholder="you@example.com" type="email" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">Password</label>
              <Input placeholder="••••••••" type="password" />
            </div>
            <Button disabled={loading} onClick={() => simulate("Email/Password")}>
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="grid gap-2">
            <Button variant="secondary" className="backdrop-blur-md" onClick={() => simulate("Google Sign-In")}>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 bg-transparent"
              onClick={() => simulate("Wallet Login")}
            >
              Login with Wallet
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            New here?{" "}
            <Link href="/auth/signup" className="underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
