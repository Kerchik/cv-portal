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
    },
    employmentHistory: {
        lv: 'Darba vēsture',
        en: 'Employment history',
        ru: 'История трудоустройства'
    },
    education: {
        lv: 'Izglītība',
        en: 'Education',
        ru: 'Образование'
    },
    toMainPage: {
        lv: 'Sākumlapa',
        en: 'Main page',
        ru: 'Главная страница'
    },
    aboutTechnology: {
        lv: 'Par tehnoloģiju',
        en: 'About technology',
        ru: 'Про технологию'
    },
    myExperience: {
        lv: 'Mana pieredze',
        en: 'My experience',
        ru: 'Мой опыт'
    },
    hello: {
        lv: 'Sveiki',
        en: 'Hello',
        ru: 'Привет'
    },
    nameSurname: {
        lv: 'Mani sauc Maksims Ļiskins',
        en: 'I am Maksims Liskins',
        ru: 'Меня зовут Максим Лискин'
    },
    aboutMeText: {
        lv: 'Tas ir mans personāls projekts, kas rādā informāciju par mani un manām spējām',
        en: 'This is my personal project, that shows information about me and my skills',
        ru: 'Это мой персональный проект, в котором указана информация обо мне и моих умениях'
    },
    aboutMeSubText: {
        lv: 'Zemāk Jūs varēsiet atradīt informāciju manu izglītību, darba pieredzi, spējām un kā sazināties ar mani',
        en: 'Below you will be able to find information about my education, working experience, skills and how to reach me',
        ru: 'Ниже вы найдете информацию о моем образовании, опыте работы, умениях и как можно со мной связаться'
    },
}

export const t = (key: keyof typeof translations, lang: 'lv' | 'en' | 'ru') => {
    return translations[key][lang] ?? key
}