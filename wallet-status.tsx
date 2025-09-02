"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

function randomAddr() {
  const hex = Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
  return `0x${hex}`
}

export function WalletStatus() {
  const [addr, setAddr] = useState<string | null>(null)
  return (
    <div className="flex items-center gap-2">
      {addr ? (
        <div className="text-xs rounded-full border px-3 py-1 bg-white/5">
          {addr.slice(0, 6)}…{addr.slice(-4)}
        </div>
      ) : (
        <span className="text-xs text-muted-foreground">Wallet: Disconnected</span>
      )}
      <Button
        size="sm"
        variant={addr ? "secondary" : "default"}
        className={addr ? "" : "bg-cyan-600 hover:bg-cyan-700"}
        onClick={() => setAddr(addr ? null : randomAddr())}
      >
        {addr ? "Disconnect" : "Connect"}
      </Button>
    </div>
  )
}
