"use client"

import { motion } from "framer-motion"

const ngos = [
  { name: "CareAid Foundation", distance: "0.8 km", x: 30, y: 45 },
  { name: "HealthBridge NGO", distance: "1.4 km", x: 62, y: 35 },
  { name: "MedicHelp Center", distance: "2.1 km", x: 48, y: 70 },
]

export default function NearbyPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Nearby Help</h1>
        <p className="text-sm text-muted-foreground">Explore NGOs around you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 overflow-hidden relative">
          <img src="/abstract-city-map-grid-light-theme.png" alt="Map placeholder" className="w-full h-[360px] object-cover" />
          {ngos.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <span className="block w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_16px_2px_rgba(34,211,238,0.7)] animate-pulse" />
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <ul className="grid gap-3">
            {ngos.map((n) => (
              <li key={n.name} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{n.name}</div>
                  <div className="text-xs text-muted-foreground">Distance: {n.distance}</div>
                </div>
                <button className="text-cyan-400 text-xs underline">View</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
