"use client"

import Image from "next/image"
import iconMail from "@/assets/icon-mail.png"
import iconContact from "@/assets/icon-contact.png"
import iconLinkedin from "@/assets/icon-linkedin.png"
import iconGithub from "@/assets/icon-github.png"
import { t } from "../Translations/Translations"
import { LangContext } from "../Providers/LangProvider"
import { useContext } from "react"

const AboutMe = () => {
  const lang = useContext(LangContext)

  return (
    <div className="container mx-auto px-[20px] sm:px-0 mb-2">
      <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center lg:justify-start">
        <Image
          src={"/me.png"}
          alt="Me"
          className="object-cover rounded-xl flex-none"
          width={300}
          height={450}
        />
        <div className="flex flex-col items-center pt-4 gap-2">
          <h1 className="font-bold text-4xl fade-in">{t("hello", lang)}</h1>
          <h2 className="font-bold text-3xl fade-in">
            {t("nameSurname", lang)}
          </h2>
          <p className="text-2xl fade-in">{t("aboutMeText", lang)}</p>
          <p className="text-2xl fade-in">{t("aboutMeSubText", lang)}</p>
          <div className="flex gap-8 fade-in-1">
            <a href="mailto:maksims.liskins@inbox.lv">
              <Image
                src={iconMail.src}
                alt="Mail Icon"
                width={50}
                height={50}
                className="w-[35px] sm:w-[50px]"
              />
            </a>
            <a href="tel:+37128460511">
              <Image
                src={iconContact.src}
                alt="Phone Icon"
                width={50}
                height={50}
                className="w-[35px] sm:w-[50px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/maksims-%C4%BCiskins-75a04421b/"
              target="_blank"
            >
              <Image
                src={iconLinkedin.src}
                alt="Linkedin Icon"
                width={50}
                height={50}
                className="w-[35px] sm:w-[50px]"
              />
            </a>
            <a href="https://github.com/Kerchik" target="_blank">
              <Image
                src={iconGithub.src}
                alt="Github Icon"
                width={50}
                height={50}
                className="w-[35px] sm:w-[50px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
