export const translations = {
    all: {
        lv: 'Visi',
        en: 'All',
        ru: 'Все'
    },
    showAll: {
        lv: 'Radīt visus',
        en: 'Show all',
        ru: 'Показать все'
    },
    toPreviousPage: {
        lv: 'Uz iepriekšējo lapu',
        en: 'To previous page',
        ru: 'На предыдущую страницу'
    },
    technologies: {
        lv: 'Tehnoloģijas',
        en: 'Technologies',
        ru: 'Технологии'
    }
}

export const t = (key: keyof typeof translations, lang: 'lv' | 'en' | 'ru') => {
    return translations[key][lang] ?? key
}