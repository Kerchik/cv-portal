"use client"

import useLocaleFromPathname from "@/hooks/useLocaleFromPathname"
import Link from "next/link"
import { t } from "../Translations/Translations"
import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  const lang = useLocaleFromPathname()

  return (
    <header className="bg-sky-500 py-3">
      <div className="container mx-auto px-[20px] sm:px-0">
        <nav className="flex justify-between">
          <ul className="flex gap-4">
            <li className="text-white">
              <Link href={`/${lang}`}>{t("toMainPage", lang)}</Link>
            </li>
            <li className="text-white">
              <Link href={`/${lang}/technologies`}>
                {t("technologies", lang)}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher currentLanguage={lang} />
        </nav>
      </div>
    </header>
  )
}

export default Header
