"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react"
import { LangContext } from "../Providers/LangProvider"
import { t } from "../Translations/Translations"
import iconArrow from "@/assets/icon-arrow.png"
import Image from "next/image"

type TGoBackButtonProps = {
  text?: string
}

const GoBackButton = ({ text }: TGoBackButtonProps) => {
  const lang = useContext(LangContext)
  const router = useRouter()

  return (
    <button type="button" className="flex gap-2" onClick={() => router.back()}>
      <Image src={iconArrow.src} alt="Back Icon" width={25} height={25} />
      {text || t("toPreviousPage", lang)}
    </button>
  )
}

export default GoBackButton
