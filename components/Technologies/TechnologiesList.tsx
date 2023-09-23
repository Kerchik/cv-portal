import Link from "next/link"
import technologiesList from "./technologies.json"
import TechnologieCard from "./TechnologieCard"

export type TTecnology = {
  id: number
  name: string
  description: string
  url: string
  image: string
  type: "Frontend" | "Backend"
  personal_experience?: string
}

type TTechnologiesListProps = {
  technologies: TTecnology[]
  limit?: number
}

const TechnologiesList = ({ technologies, limit }: TTechnologiesListProps) => {
  const limitedTechnologies: TTecnology[] = limit
    ? technologies.slice(0, limit)
    : technologies

  return (
    <div className="container mx-auto px-[20px] sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {limitedTechnologies.map((tecnology: TTecnology) => (
          <TechnologieCard
            key={tecnology.id}
            tecnology={tecnology}
            showLink={true}
            showDescription={true}
          />
        ))}
      </div>
      {limit && (
        <div className="flex justify-center mt-5">
          <Link
            href={"/technologies"}
            className="border border-sky-500 px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-white hover:text-sky-500 duration-200 uppercase"
          >
            Show all
          </Link>
        </div>
      )}
    </div>
  )
}

export default TechnologiesList
