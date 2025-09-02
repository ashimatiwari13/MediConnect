"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"
import { WalletStatus } from "@/components/wallet-status"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <h2 className="text-sm font-medium">MediConnect Dashboard</h2>
            <WalletStatus />
          </div>
        </header>
        <main className="max-w-6xl mx-auto w-full px-4 py-6">{children}</main>
      </div>
    </div>
  )
}
