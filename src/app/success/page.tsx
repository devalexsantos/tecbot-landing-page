import Image from 'next/image'
import { SuccessButton } from '../components/buttons/SuccessButton'

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 min-h-[90vh]">
        <div className="flex flex-1 flex-col justify-center items-center gap-8 pt-8 md:flex-row-reverse">
          <div className="flex flex-col items-center gap-6 max-w-[500px]">
            <Image
              src="/img/tecbot-bot.svg"
              width={155}
              height={118}
              alt="TecBot Icon"
            />
            <h1 className="text-5xl font-extrabold text-primary text-center">
              Obrigado por assinar o TecBot!
            </h1>
            <h2 className="text-3xl text-center">Comece a usar agora mesmo!</h2>
            <SuccessButton />
          </div>
        </div>
      </div>
    </main>
  )
}
