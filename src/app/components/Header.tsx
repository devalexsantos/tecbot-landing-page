import Image from 'next/image'

export function Header() {
  return (
    <div className="flex justify-between">
      <Image
        src="/assets/tecbot-logo.svg"
        alt="TecBot"
        width={144}
        height={32}
      />
    </div>
  )
}
