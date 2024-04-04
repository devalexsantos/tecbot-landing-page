import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex justify-between">
      <Image
        src="/assets/tecbot-logo.svg"
        alt="TecBot"
        width={144}
        height={32}
      />
      <nav className="flex items-center gap-4">
        <Link href="#preco" className="text-lg hover:underline">
          Preço
        </Link>
        <Link href="#faq" className="text-lg hover:underline">
          FAQ
        </Link>
      </nav>
    </div>
  )
}
