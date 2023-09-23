"use client"

import { useRouter } from "next/navigation"

type TGoBackButtonProps = {
  text?: string
}

const GoBackButton = ({ text }: TGoBackButtonProps) => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      {text || "dasd"}
    </button>
  )
}

export default GoBackButton
