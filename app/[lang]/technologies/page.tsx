"use client"

import LangProvider from "@/components/Providers/LangProvider"
import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import TechnologiesTabs from "@/components/Technologies/TechnologiesTabs"
import technologiesJson from "@/components/Technologies/technologies.json"
import { useState } from "react"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
}

export const dynamicParams = false

type TTechnologiesPageProps = {
  params: {
    lang: "lv" | "en" | "ru"
  }
}

const TechnologiesPage = ({ params }: TTechnologiesPageProps) => {
  const { lang } = params

  const initialTechnologies: TTecnology[] = technologiesJson as TTecnology[]

  const [technologies, setTechnologies] =
    useState<TTecnology[]>(initialTechnologies)
  return (
    <main className="flex flex-col items-center justify-between py-24">
      <LangProvider lang={lang}>
        <TechnologiesTabs
          initialTechnologies={initialTechnologies}
          setTechnologiesCallback={setTechnologies}
        />
        <TechnologiesList technologies={technologies} />
      </LangProvider>
    </main>
  )
}

export default TechnologiesPage
