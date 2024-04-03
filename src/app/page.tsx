import { Hero } from './sections/Hero'
import { ListNews } from './sections/ListNews'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <ListNews />
    </main>
  )
}
