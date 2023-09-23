import GoBackButton from "@/components/Common/GoBackButton"
import TechnologieCard from "@/components/Technologies/TechnologieCard"
import { TTecnology } from "@/components/Technologies/TechnologiesList"
import tecnologiesList from "@/components/Technologies/technologies.json"
import Image from "next/image"

export const generateStaticParams = async () => {
  return tecnologiesList.map((page) => ({
    name: `${page.url}`,
  }))
}

export const dynamicParams = false

const TechPage = ({ params }: { params: { name: string } }) => {
  const techData = tecnologiesList.find(
    (tech) => tech.url === params.name
  ) as TTecnology

  return (
    <main className="min-h-screen items-center justify-between py-24">
      <div className="container mx-auto px-[20px] sm:px-0 flex gap-5">
        <div className="w-1/3">
          <TechnologieCard tecnology={techData} />
        </div>
        <div className="w-2/3 flex flex-col gap-8">
          <div>{techData.description}</div>
          <div>{techData.personal_experience}</div>
        </div>
      </div>
      <div className="container mx-auto mt-7">
        <GoBackButton text="To previouse page" />
      </div>
    </main>
  )
}

export default TechPage
