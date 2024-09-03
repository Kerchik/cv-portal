import iconJob from "@/assets/icon-job.png"
import { TExperienceTimelineItemWithLocales } from '../Common/utils'

export const jobsList: TExperienceTimelineItemWithLocales[] = [
  {
    id: 1,
    icon: iconJob,
    title: {
      lv: "Frontend izstrādātājs GRC Law",
      en: "Frontend developer at GRC Law",
      ru: "Frontend разработчик в GRC Law",
    },
    years: {
      lv:  "Jūlijs 2020 — Septembris 2021",
      en:  "July 2020 — September 2021",
      ru:  "Июль 2020 — Сентябрь 2021",
    },
  },
  {
    id: 2,
    icon: iconJob,
    title: {
      lv: "WEB izstrādātājs SIA E-synergy",
      en: "WEB Developer at SIA E-synergy",
      ru: "WEB Разработчик в SIA E-synergy",
    },
    years: {
      lv: "Oktobris 2021 — Jūnijs 2024",
      en: "October 2021 — June 2024",
      ru: "Октябрь 2021 — Июнь 2024",
    },
  },
]