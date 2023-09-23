import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import technologies from "@/components/Technologies/technologies.json"

export default function Home() {
  const typedTechnologies: TTecnology[] = technologies as TTecnology[]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <TechnologiesList technologies={typedTechnologies} limit={8} />
    </main>
  )
}
