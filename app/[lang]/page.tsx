import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline"
import LangProvider from "@/components/Providers/LangProvider"
import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import technologies from "@/components/Technologies/technologies.json"
import { jobsList } from "@/components/ExperienceTimeline/jobsList"
import { educationList } from "@/components/ExperienceTimeline/educationList"
import { t } from "@/components/Translations/Translations"
import { getExperienceitemsList } from "@/components/Common/utils"
import AboutMe from "@/components/AboutMe/AboutMe"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
}

type THomeProps = {
  params: {
    lang: "lv" | "en" | "ru"
  }
}

export default function Home({ params }: THomeProps) {
  const { lang } = params

  const typedTechnologies: TTecnology[] = technologies as TTecnology[]

  return (
    <main className="flex min-h-screen flex-col justify-between py-24">
      <LangProvider lang={lang}>
        <AboutMe />
        <ExperienceTimeline
          title={t("employmentHistory", lang)}
          experienceItems={getExperienceitemsList(jobsList, lang)}
        />
        <ExperienceTimeline
          title={t("education", lang)}
          experienceItems={getExperienceitemsList(educationList, lang)}
        />
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl pb-2 text-center">
            {t("technologies", lang)}
          </h2>
        </div>
        <TechnologiesList technologies={typedTechnologies} limit={8} />
      </LangProvider>
    </main>
  )
}
