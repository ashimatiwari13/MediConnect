"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/donor", label: "Donor" },
  { href: "/dashboard/ngo", label: "NGO" },
  { href: "/dashboard/patient", label: "Patient" },
  { href: "/dashboard/blockchain", label: "Secure Tracking" },
  { href: "/dashboard/nearby", label: "Nearby Help" },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden md:block border-r bg-background/60 backdrop-blur">
      <div className="p-4">
        <div className="font-semibold mb-4">MediConnect</div>
        <nav className="grid gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} className="relative">
                <div className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  <span className={active ? "" : "text-muted-foreground"}>{link.label}</span>
                </div>
                {active && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 -z-10 rounded-lg border border-cyan-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
