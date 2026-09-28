/**
 * Soft, blurred scenic backdrop behind the phone frame.
 * Uses a fixed landscape image so the device remains the focal point.
 */
export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Scaled + blurred image so edges stay filled after the blur softens detail */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/ambient-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.06)",
          filter: "blur(8px) saturate(1.08) brightness(0.78)",
        }}
      />
      {/* Light vignette so the phone and controls stay readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.28) 100%)",
        }}
      />
    </div>
  )
}
