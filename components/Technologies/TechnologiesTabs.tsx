"use client"

import { Dispatch, SetStateAction, useMemo, useState } from "react"
import { TTecnology } from "./TechnologiesList"

type TTechnologiesTabsProps = {
  setTechnologiesCallback: Dispatch<SetStateAction<TTecnology[]>>
  initialTechnologies: TTecnology[]
}

const TechnologiesTabs = ({
  initialTechnologies,
  setTechnologiesCallback,
}: TTechnologiesTabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const tabsList = [
    {
      id: 0,
      label: "All",
    },
    {
      id: 1,
      label: "Frontend",
      type: "Frontend",
    },
    {
      id: 2,
      label: "Backend",
      type: "Backend",
    },
  ]

  const tabs = useMemo(() => {
    return (
      <>
        {tabsList.map((tab, index) => (
          <button
            key={tab.id}
            className={`${
              selectedTab === tab.id
                ? "border border-sky-500 text-white bg-sky-500"
                : "border border-sky-500 text-sky-500 bg-white"
            } ${index === 0 ? "rounded-s-md" : ""}
            ${index === tabsList.length - 1 ? "rounded-e-md" : ""}
             px-6 text-lg py-2`}
            onClick={() => {
              handleTabChange(tab.id)
            }}
          >
            {tab.label}
          </button>
        ))}
      </>
    )
  }, [selectedTab])

  const handleTabChange = (selectedTab: number) => {
    setSelectedTab(selectedTab)

    const type = tabsList[selectedTab].type
    if (type) {
      setTechnologiesCallback(
        initialTechnologies.filter((tech) => tech.type === type)
      )
    } else {
      setTechnologiesCallback(initialTechnologies)
    }
  }

  return (
    <div className="px-5 flex flex-col w-full sm:w-auto sm:flex-row justify-center mb-4">
      {tabs}
    </div>
  )
}

export default TechnologiesTabs
