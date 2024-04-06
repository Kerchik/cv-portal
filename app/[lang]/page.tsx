import LangProvider from "@/components/Providers/LangProvider"
import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import technologies from "@/components/Technologies/technologies.json"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
}

export const dynamicParams = false

type THomeProps = {
  params: {
    lang: "lv" | "en" | "ru"
  }
}

export default function Home({ params }: THomeProps) {
  const { lang } = params

  const typedTechnologies: TTecnology[] = technologies as TTecnology[]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <LangProvider lang={lang}>
        <TechnologiesList technologies={typedTechnologies} limit={8} />
      </LangProvider>
    </main>
  )
}
