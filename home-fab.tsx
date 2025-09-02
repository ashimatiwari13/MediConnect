"use client"

import Link from "next/link"
import { HomeIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type HomeFabProps = {
  className?: string
}

export default function HomeFab({ className }: HomeFabProps) {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50",
        // mobile-first spacing; adjust on larger screens
        "md:bottom-6 md:right-6",
        className,
      )}
    >
      <Link
        href="/"
        aria-label="Go to Home"
        className={cn(
          // solid primary with high contrast; rounded for FAB
          "inline-flex items-center gap-2 rounded-full px-4 py-2",
          "bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition",
          // accessibility: larger tap target
          "min-h-10",
        )}
      >
        <HomeIcon className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Home</span>
        <span className="hidden sm:inline">Home</span>
      </Link>
    </div>
  )
}
