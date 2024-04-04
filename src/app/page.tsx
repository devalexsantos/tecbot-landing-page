import { Hero } from './sections/Hero'
import { ListNews } from './sections/ListNews'
import { Prices } from './sections/Prices'
import { SearchTerms } from './sections/SearchTerms'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <ListNews />
      <SearchTerms />
      <Prices />
    </main>
  )
}
