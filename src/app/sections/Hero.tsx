import Image from 'next/image'
import { Header } from '../components/Header'
import { ArrowDownCircle, CircleCheck } from 'lucide-react'
import { BuyButton } from '../components/buttons/BuyButton'
import { TryButton } from '../components/buttons/TryButton'

export function Hero() {
  return (
    <div className="flex flex-col gap-4 min-h-[90vh]">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center gap-8 pt-8 md:flex-row-reverse">
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h1 className="text-4xl text-center md:text-left">
            Não perca mais tempo buscando{' '}
            <strong>notícias de tecnologia</strong>.
          </h1>
          <h2 className="text-5xl font-extrabold text-primary text-center md:text-left">
            Deixa que o <span className="text-[#FFAE0F]">tecbot</span> reune
            tudo pra você.
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <CircleCheck size={37} color="#008B06" />
              <div className="flex flex-col gap-0 mt-4">
                <span className="text-xl">
                  Principais portais de <strong>tecnologia</strong> do país e do
                  mundo.
                </span>
                <span className="text-sm">
                  - Novos sendo inseridos a todo momento.
                </span>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <CircleCheck size={37} color="#008B06" />
              <span className="text-xl">
                Notícias em <strong>tempo real</strong>.
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <CircleCheck size={37} color="#008B06" />
              <div className="flex flex-col gap-0 mt-4">
                <span className="text-xl">
                  Pesquise por <strong>assunto de interesse</strong>.
                </span>
                <span className="text-sm">
                  - Você digita o assunto e o tecbot pesquisa em todos os
                  portais.
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <BuyButton />
              <TryButton />
            </div>
          </div>
        </div>
        <Image
          src="/img/iphone-mockup.png"
          width={329}
          height={624}
          alt="Iphone Utilizando o TecBot"
        />
      </div>
      <div className="w-full flex justify-center">
        <ArrowDownCircle
          className="opacity-45"
          color="#474747"
          size={40}
          strokeWidth={1}
        />
      </div>
    </div>
  )
}
