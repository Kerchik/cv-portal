import { StaticImageData } from 'next/image'
import { TExperienceTimelineItem } from '../ExperienceTimeline/ExperienceTimeline'

export type TExperienceTimelineItemWithLocales = {
    id: number
    icon: StaticImageData
    title: {
        lv: string,
        en: string,
        ru: string,
    }
    years: {
        lv: string,
        en: string,
        ru: string,
    }
}

export const LOCALES = ['lv', 'ru', 'en']

export const getExperienceitemsList = (list: TExperienceTimelineItemWithLocales[], lang: 'lv' | 'en' | 'ru'): TExperienceTimelineItem[] => {
    return list.map(job => (
      {
        ...job,
        title: job.title[lang],
        years: job.years[lang]
      }
    ))
}