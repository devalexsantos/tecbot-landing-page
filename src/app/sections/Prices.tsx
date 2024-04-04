import { BuyButton } from '../components/buttons/BuyButton'
import { TryButton } from '../components/buttons/TryButton'
import { FAQ } from './FAQ'

export function Prices() {
  return (
    <div className="flex flex-col items-center text-center gap-4 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center gap-8 pt-8 mt-8">
        <div className="flex flex-col items-center gap-8 max-w-[665px]">
          <h2 className="text-5xl font-bold text-center md:text-left">
            Chega de ficar no escuro!
          </h2>
          <h3 className="text-4xl font-light">
            Acompanhe agora o mundo da tecnologia de forma rápida e
            descomplicada!
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full mt-8 md:flex-row">
        <div className="h-[300px] bg-white w-full border border-[#008B06] rounded-xl flex flex-col justify-center items-center">
          <span className="text-xl font-bold text-[#008B06]">Mensal</span>
          <span className="text-2xl line-through font-light">R$14,90</span>
          <div className="flex items-center gap-1 mt-[-30px]">
            <span className="text-xl font-bold">R$</span>
            <span className="text-9xl font-bold pt-4">9</span>
            <span className="text-xl font-bold leading-none">,90</span>
          </div>
          <BuyButton />
          <span className="mt-2 font-light text-orange-500">
            Assinatura de lançamento! Por tempo limitado!
          </span>
        </div>

        <div className="h-[300px] bg-white w-full border rounded-xl flex flex-col justify-center items-center">
          <span className="text-xl font-bold text-[#008B06]">Teste 24h</span>
          <span className="text-xl font-light">Não precisa de cartão</span>
          <div className="flex items-center gap-1 mt-[-30px]">
            <span className="text-xl font-bold">R$</span>
            <span className="text-9xl font-bold pt-4">0</span>
          </div>
          <TryButton />
        </div>
      </div>
      <FAQ />
    </div>
  )
}
