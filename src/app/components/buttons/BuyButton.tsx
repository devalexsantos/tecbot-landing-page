import Link from 'next/link'

export function BuyButton() {
  return (
    <Link
      href="https://buy.stripe.com/cN22btb128pB9XObIJ"
      target="_blank"
      className="flex items-center justify-center text-lg w-full max-w-[240px] text-white bg-[#289d2d] font-bold tracking-wide py-3 shadow-md rounded-md hover:bg-[#29b62e] transition-colors duration-300 ease-in-out"
    >
      Assinar Agora
    </Link>
  )
}
