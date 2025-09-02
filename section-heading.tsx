import type React from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div id={id} className={cn("mx-auto mb-6 max-w-6xl px-4", className)}>
      <h2 className="inline-block text-2xl font-semibold tracking-tight md:text-3xl">
        {children}
        <span className="mt-1 block h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
      </h2>
    </div>
  )
}
