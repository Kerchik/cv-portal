import LangProvider from "@/components/Providers/LangProvider"
import TechnologiesPageComponent from "@/components/Technologies/TechnologiesPageComponent"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
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
