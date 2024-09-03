"use client"

import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import technologiesJson from "@/components/Technologies/technologies.json"
import { useState } from "react"
import TechnologiesTabs from "./TechnologiesTabs"

export const generateStaticParams = async () => {
  return ["lv", "en", "ru"].map((lang) => ({
    lang: `${lang}`,
  }))
}

const TechnologiesPageComponent = () => {
  const initialTechnologies: TTecnology[] = technologiesJson as TTecnology[]

  const [technologies, setTechnologies] =
    useState<TTecnology[]>(initialTechnologies)
  return (
    <>
      <TechnologiesTabs
        initialTechnologies={initialTechnologies}
        setTechnologiesCallback={setTechnologies}
      />
      <TechnologiesList technologies={technologies} />
    </>
  )
}

export default TechnologiesPageComponent
