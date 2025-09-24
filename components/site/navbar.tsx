"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, HandHeart, LogIn, Menu, X, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/donate", label: "Donate Medicine" },
  { href: "/request", label: "Request Medicine" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Stethoscope className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <span className="font-semibold tracking-tight">MediConnect</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active =
              item.href !== "/"
                ? pathname === item.href // for non-anchor routes
                : pathname === "/"
            return (
              <Link key={item.href} href={item.href} className="relative">
                {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-md bg-primary/10" />}
                <span
                  className={`relative z-10 rounded-md px-3 py-2 text-sm transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/auth/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="gap-2 rounded-2xl">
              <LogIn className="size-4" />
              <span>Login</span>
            </Button>
          </Link>
          <Link href="/donate" className="hidden sm:block">
            <Button size="sm" className="gap-2 rounded-2xl">
              <HandHeart className="size-4" />
              <span>Donate</span>
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border/40 bg-background md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                    {item.label}
                  </div>
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <Link href="/auth/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" size="sm" className="rounded-2xl">
                    Login
                  </Button>
                </Link>
                <Link href="/donate" onClick={() => setOpen(false)}>
                  <Button size="sm" className="rounded-2xl">
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
