"use client"

import { useRef, useState } from "react"
import { LOCALES as locales } from "../Common/utils"
import { useRouter } from "next/navigation"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

type TLanguageSwitcher = {
  currentLanguage: "lv" | "en" | "ru"
}

const LanguageSwitcher = ({ currentLanguage }: TLanguageSwitcher) => {
  const [isSwitcherOpen, setIsSwticherOpen] = useState<boolean>(false)

  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsSwticherOpen(false))

  const router = useRouter()

  const handleLanguageChange = (locale: string) => {
    router.push(`/${locale}`)
    setIsSwticherOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className="text-white"
        onClick={() => {
          setIsSwticherOpen(true)
        }}
      >
        {currentLanguage.toUpperCase()}
      </button>
      {isSwitcherOpen && (
        <div className="bg-white px-5 py-2 absolute rounded-md right-0 xl:right-auto">
          <ul className="flex flex-col gap-2">
            {locales
              .filter((locale) => locale !== currentLanguage)
              .map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
