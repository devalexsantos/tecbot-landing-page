'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function FAQ() {
  const [itemOpened, setItemOpened] = useState('')
  const handleOpen = (value: string) => {
    setItemOpened(value)
  }

  const questionsAndAnswers = [
    {
      question: 'Como usar o TecBot?',
      answer:
        '- Para usar o TecBot é bem simples. Abra uma conversa com ele e envie a palavra “menu”. Ele irá te oferecer uma lista enumerada com os principais portais de tecnologia do Brasil. Digite o número correspondente para visualizar as últimas notícias deste portal. Caso você envie qualquer outra palavra diferente de “menu” ele irá entender como uma pesquisa e irá pesquisar a palavra enviada em todos os portais e te mostrará o resultado da busca.',
    },
    {
      question: 'Como o TecBot mostra as notícias?',
      answer:
        '- O TecBot mostra o título, a data de publicação, a hora da publicação, os primeiros 200 caracteres do conteúdo da notícia e o link direto para visualizar a notícia completa.',
    },
    {
      question: 'Como o TecBot pesquisa as notícias?',
      answer:
        '- O TecBot pesquisa as notícias em tempo real em todos os portais de tecnologia do Brasil através do Feed/RSS dos mesmos. Ele pesquisa a palavra enviada e te mostra o resultado da busca.',
    },
    {
      question: 'O TecBot é ilegal?',
      answer:
        '- É completamente legal utilizar o TecBot pois ele utiliza dos Feed/RSS fornecidos gratuitamente pelos próprios portais de notícias. O TecBot segue todos padrões de qualidade e legalidade.',
    },
    {
      question: 'Funciona 24 horas?',
      answer:
        '- Sim! O TecBot fica ativo 24h por dia e 07 dias por semana. A hora que você quiser é só falar com ele!',
    },
    {
      question: 'Como obtenho suporte?',
      answer:
        '- Basta falar comigo diretamente, Alex, o criador do TecBot. Estou sempre disponível para te ajudar através do WhatsApp (71) 99298-6245',
    },
  ]

  return (
    <div id="faq" className="w-full">
      <h2 className="text-3xl font-bold text-center mt-10">FAQ</h2>
      <h3 className="text-xl">Perguntas Frequentes:</h3>
      <Accordion.Root className="w-full" type="single">
        {questionsAndAnswers.map((item, index) => (
          <Accordion.Item key={index} value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger
                onClick={() => handleOpen(`item-${index}`)}
                className={`w-full p-3 ${
                  itemOpened === `item-${index}`
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                } border rounded-xl text-left flex items-center gap-3 mt-1`}
              >
                {itemOpened === `item-${index}` ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
                {item.question}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="transition-all duration-300 ease-in-out w-full rounded-xl border mt-1 p-3 bg-slate-100 text-left">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
