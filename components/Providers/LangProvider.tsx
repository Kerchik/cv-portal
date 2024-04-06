"use client"

import { createContext } from "react"

export const LangContext = createContext<"lv" | "en" | "ru">("lv")

type TProviderProps = {
  children: React.ReactNode
  lang: "lv" | "en" | "ru"
}
const LangProvider = ({ children, lang }: TProviderProps) => {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export default LangProvider
