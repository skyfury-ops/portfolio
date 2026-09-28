"use client"

import { useDevice } from "@/hooks/use-device"

/**
 * DeviceWallpaper
 *
 * Fills the phone screen (home + lock) with Skyfury's sky landscape.
 * A light overlay keeps icons and lock-screen text readable in both themes.
 */
export default function DeviceWallpaper({ scale = 1 }: { scale?: number }) {
  const { theme } = useDevice()
  const isDark = theme === "dark"

  return (
    <div
      className="absolute inset-0 overflow-hidden transition-transform duration-300"
      style={{ transform: `scale(${scale})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/ambient-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Soft contrast so labels stay readable over the sky */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.45) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.22) 100%)",
        }}
      />
    </div>
  )
}
