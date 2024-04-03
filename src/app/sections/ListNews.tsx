import { Check } from 'lucide-react'
import Image from 'next/image'

export function ListNews() {
  const tecnologies = [
    'Tecnoblog',
    'TabNews',
    'TechTudo',
    'Adrenaline',
    'TecMundo',
    'Olhar Digital',
    'CanalTech',
    'The Verge',
    'The Register',
  ]

  return (
    <div className="flex flex-col gap-4 min-h-[90vh]">
      <div className="flex flex-1 flex-col justify-center items-center gap-8 pt-8">
        <div className="flex flex-1 flex-col justify-center items-center gap-8 pt-8 md:flex-row">
          <div className="flex flex-col gap-6 max-w-[530px]">
            <h2 className="text-5xl font-extrabold text-primary text-center md:text-left">
              Fique por dentro de tudo o que acontece na área de TI
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {tecnologies.map((tecnology) => (
                <span
                  key={tecnology}
                  className="flex justify-center items-center gap-1 py-1 px-3 bg-white border rounded-xl"
                >
                  <Check size={20} color="#008B06" />
                  {tecnology}
                </span>
              ))}
            </div>
            <span>E muito mais!</span>
          </div>
          <Image
            src="/img/iphone-mockup.png"
            width={329}
            height={624}
            alt="Iphone Utilizando o TecBot"
          />
        </div>
      </div>
    </div>
  )
}
