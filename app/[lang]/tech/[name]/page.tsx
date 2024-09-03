import GoBackButton from "@/components/Common/GoBackButton"
import LangProvider from "@/components/Providers/LangProvider"
import TechnologieCard from "@/components/Technologies/TechnologieCard"
import { TTecnology } from "@/components/Technologies/TechnologiesList"
import tecnologiesList from "@/components/Technologies/technologies.json"
import { t } from "@/components/Translations/Translations"
import { Metadata, ResolvingMetadata } from "next"

type TTechPageProps = {
  params: {
    lang: "lv" | "en" | "ru"
    name: string
  }
}

type TMetadata = {
  params: TTechPageProps["params"]
}

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

export async function generateMetadata({
  params,
}: TMetadata): Promise<Metadata> {
  const tech = tecnologiesList.find((item) => item.url === params.name)
  const { lang } = params

  return {
    title: tech?.name,
    description: tech?.description[lang],
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
        <div className="container mx-auto px-[20px] sm:px-0 flex gap-5 flex-wrap xl:flex-nowrap">
          <div className="w-full xl:w-1/3">
            <TechnologieCard tecnology={techData} />
          </div>
          <div className="w-full xl:w-2/3 flex flex-col gap-8 text-justify">
            <div>
              <h2 className="font-bold text-2xl pb-2">
                {t("aboutTechnology", lang)}:
              </h2>
              {techData.description[lang]}
            </div>
            <div>
              <h2 className="font-bold text-2xl pb-2">
                {t("myExperience", lang)}:
              </h2>
              {techData.personal_experience[lang]}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-7 px-[20px] sm:px-0">
          <GoBackButton />
        </div>
      </main>
    </LangProvider>
  )
}

export default TechPage
