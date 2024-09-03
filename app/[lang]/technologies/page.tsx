import LangProvider from "@/components/Providers/LangProvider"
import TechnologiesPageComponent from "@/components/Technologies/TechnologiesPageComponent"
import { TMetadata } from "@/types/metadata"
import { Metadata } from "next"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
}

export async function generateMetadata({
  params,
}: TMetadata): Promise<Metadata> {
  const { lang } = params

  const metadata = {
    title: {
      lv: "Tehnoloģijas",
      en: "Technologies",
      ru: "Технологии",
    },
    description: {
      lv: "Tehnoloģijas ar kurām esmu pazistāms",
      en: "Technologies, that I am familliar with",
      ru: "Технологии, с которыми я знаком",
    },
  }

  return {
    title: metadata.title[lang],
    description: metadata.description[lang],
  }
}

type TTechnologiesPageProps = {
  params: {
    lang: "lv" | "en" | "ru"
  }
}

const TechnologiesPage = ({ params }: TTechnologiesPageProps) => {
  const { lang } = params

  return (
    <main className="flex flex-col items-center justify-between py-24">
      <LangProvider lang={lang}>
        <TechnologiesPageComponent />
      </LangProvider>
    </main>
  )
}

export default TechnologiesPage
