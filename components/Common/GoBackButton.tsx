"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react"
import { LangContext } from "../Providers/LangProvider"
import { t } from "../Translations/Translations"

type TGoBackButtonProps = {
  text?: string
}

const GoBackButton = ({ text }: TGoBackButtonProps) => {
  const lang = useContext(LangContext)
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      {text || t("toPreviousPage", lang)}
    </button>
  )
}

export default GoBackButton
