"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function ScannerModal({
  open,
  onOpenChange,
  onResult,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  onResult: (data: { name: string; qty: number }) => void
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useEffect(() => {
    let stream: MediaStream | null = null
    if (open) {
      navigator.mediaDevices
        ?.getUserMedia?.({ video: { facingMode: "environment" } })
        .then((s) => {
          stream = s
          if (videoRef.current) {
            videoRef.current.srcObject = s
            videoRef.current.play().catch(() => {})
          }
        })
        .catch(() => {})
    }
    return () => {
      stream?.getTracks?.().forEach((t) => t.stop())
    }
  }, [open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-background p-4">
        <h3 className="font-semibold">Scan Medicine Barcode</h3>
        <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg bg-black">
          <video ref={videoRef} className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              onResult({ name: "Scanned: Paracetamol 500mg", qty: 2 })
              onOpenChange(false)
            }}
          >
            Simulate Scan ✓
          </Button>
        </div>
      </div>
    </div>
  )
}
