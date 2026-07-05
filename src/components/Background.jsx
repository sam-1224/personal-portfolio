/**
 * Decorative blurred gradient blobs, colored by the active daisyUI theme
 * (primary / secondary / accent), sitting behind all content.
 * Pure CSS — no canvas, no animation loops, no performance cost.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  )
}
