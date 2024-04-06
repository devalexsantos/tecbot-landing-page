import type { Metadata } from 'next'
import { Blinker } from 'next/font/google'
import './globals.css'

const blinker = Blinker({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'TecBot - Notícias de tecnologia em seu WhatsApp',
  description:
    'Fique por dentro de tudo que acontece no mundo da tecnologia diretamente no seu WhatsApp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`bg-[url('/img/background-page.png')] bg-repeat ${blinker.className}`}
      >
        <div className="container m-auto max-w-5xl p-8">{children}</div>
        <footer className="py-8 bg-slate-100 mt-14">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TecBot. Todos os direitos
            reservados. Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/devalexsantos/"
              target="_blank"
              className="underline"
            >
              Alex Santos
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
