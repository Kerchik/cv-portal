import GoBackButton from "@/components/Common/GoBackButton"
import LangProvider from "@/components/Providers/LangProvider"
import TechnologieCard from "@/components/Technologies/TechnologieCard"
import { TTecnology } from "@/components/Technologies/TechnologiesList"
import tecnologiesList from "@/components/Technologies/technologies.json"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"

export const generateStaticParams = async () => {
  const languages = ["lv", "en", "ru"]

  const res = tecnologiesList.flatMap((page) =>
    languages.map((lang) => ({
      lang: lang,
      name: page.url,
    }))
  )
  return res
}

export const dynamicParams = false

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tech = tecnologiesList.find((item) => item.url === params.name)
  return {
    title: tech?.name,
    description: tech?.description,
  }
}

type TTechPageProps = {
  params: {
    lang: "lv" | "en" | "ru"
    name: string
  }
}

const TechPage = ({ params }: TTechPageProps) => {
  const { lang } = params

  const techData = tecnologiesList.find(
    (tech) => tech.url === params.name
  ) as TTecnology

  return (
    <LangProvider lang={lang}>
      <main className="min-h-screen items-center justify-between py-24">
        <div className="container mx-auto px-[20px] sm:px-0 flex gap-5">
          <div className="w-1/3">
            <TechnologieCard tecnology={techData} />
          </div>
          <div className="w-2/3 flex flex-col gap-8">
            <div>{techData.description[lang]}</div>
            <div>{techData.personal_experience}</div>
          </div>
        </div>
        <div className="container mx-auto mt-7">
          <GoBackButton />
        </div>
      </main>
    </LangProvider>
  )
}

export default TechPage
