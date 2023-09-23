"use client"

import Link from "next/link"
import { TTecnology } from "./TechnologiesList"
import Image from "next/image"

type TTechnologieCardProps = {
  tecnology: TTecnology
  showLink?: boolean
  showDescription?: boolean
}

const TechnologieCard = ({
  tecnology,
  showLink = false,
  showDescription = false,
}: TTechnologieCardProps) => {
  const truncate = (string: string, limit: number): string => {
    if (string.length <= limit) return string

    const truncatedString = string.slice(0, limit)

    const lastChar = truncatedString[truncatedString.length - 1]
    const isLastCharSeparator = /\s|[.,!?;:'"]/.test(lastChar)

    if (!isLastCharSeparator) {
      const lastWordIndex = truncatedString.lastIndexOf(" ")
      return `${truncatedString.slice(0, lastWordIndex)}...`
    }

    return `${truncatedString}...`
  }

  return (
    <div className="blog relative rounded-md w-full h-[400px] overflow-hidden m-auto shadow-md">
      <div className="title-box">
        <h3 className="inline-block font-medium text-2xl text-white text-center relative z-[2]">
          {tecnology.name}
        </h3>
        <hr className="mx-auto mt-1 w-[80px] h- h-1 border-none bg-amber-300 relative z-[2]" />
      </div>
      {showDescription && (
        <div className="info text-base text-white relative bottom-3 opacity-0 bg-transparent text-center z-[2] px-5">
          <span>{truncate(tecnology.description, 300)}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
      <Image
        src={tecnology.image}
        alt={tecnology.name}
        className="object-cover"
        fill={true}
      />
      {showLink && (
        <Link
          href={`/tech/${tecnology.url}`}
          className="absolute inset-0 z-[3]"
        ></Link>
      )}
    </div>
  )
}

export default TechnologieCard
