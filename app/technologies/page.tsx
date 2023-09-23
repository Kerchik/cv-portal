"use client"

import TechnologiesList, {
  TTecnology,
} from "@/components/Technologies/TechnologiesList"
import TechnologiesTabs from "@/components/Technologies/TechnologiesTabs"
import technologiesJson from "@/components/Technologies/technologies.json"
import { useState } from "react"

const TechnologiesPage = () => {
  const initialTechnologies: TTecnology[] = technologiesJson as TTecnology[]

  const [technologies, setTechnologies] =
    useState<TTecnology[]>(initialTechnologies)
  return (
    <main className="flex flex-col items-center justify-between py-24">
      <TechnologiesTabs
        initialTechnologies={initialTechnologies}
        setTechnologiesCallback={setTechnologies}
      />
      <TechnologiesList technologies={technologies} />
    </main>
  )
}

export default TechnologiesPage
