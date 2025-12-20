import React from "react"
import { cn } from "@/lib/utils"

export default function GlassCard({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        "bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg transition-all",
        hover && "hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  )
}
