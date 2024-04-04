import Link from 'next/link'

export function TryButton() {
  return (
    <Link
      href="https://buy.stripe.com/cN22btb128pB9XObIJ"
      target="_blank"
      className="flex items-center justify-center text-lg w-full max-w-[240px] border border-[#008B06] text-[#008B06] font-bold tracking-wide py-3 shadow-md rounded-md"
    >
      Quero Testar
    </Link>
  )
}
