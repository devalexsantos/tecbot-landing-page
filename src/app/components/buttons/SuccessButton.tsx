import Link from 'next/link'

export function SuccessButton() {
  return (
    <Link
      href="https://wa.me/5571982412246?text=menu"
      target="_blank"
      className="flex items-center justify-center text-lg w-full max-w-[240px] text-white bg-[#289d2d] font-bold tracking-wide py-3 shadow-md rounded-md hover:bg-[#29b62e] transition-colors duration-300 ease-in-out"
    >
      Começar agora
    </Link>
  )
}
