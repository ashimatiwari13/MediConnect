"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl">
        <nav className="m-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="font-semibold tracking-tight">
              MediConnect
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </a>
              <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-foreground">
                Login
              </Link>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {mounted && (
                <Button variant="outline" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? "Light" : "Dark"}
                </Button>
              )}
              <Link href="/auth/login">
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                  Connect
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
