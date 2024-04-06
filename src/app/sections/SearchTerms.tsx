import Image from 'next/image'

export function SearchTerms() {
  return (
    <div className="flex flex-col items-center text-center gap-4 min-h-[90vh]">
      <div className="flex flex-1 flex-col justify-center items-center gap-8 pt-8 max-w-[500px]">
        <h2 className="text-5xl font-extrabold text-primary">
          Deixa que o bot busca pra você! 🔎
        </h2>
        <span className="text-3xl">
          Digite uma <strong>palavra chave</strong> ou uma{' '}
          <strong>frase</strong> de seu interesse e pronto!
        </span>
        <span className="text-3xl">
          O tecbot vai buscar para você em
          <strong> todos os canais</strong>!
        </span>
        <Image
          src="/img/iphone-search-tecbot.png"
          width={329}
          height={454}
          alt="Iphone mockup with tecbot search bar"
        />
      </div>
    </div>
  )
}
