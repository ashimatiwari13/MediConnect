"use client"

import type React from "react"

import Link from "next/link"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 700))
      toast({ title: "Account created (demo)", description: "Replace with real auth later." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>Join MediConnect.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create account"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link className="text-primary hover:underline" href="/auth/login">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
