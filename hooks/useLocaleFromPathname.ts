import { usePathname } from "next/navigation"

const useLocaleFromPathname = () : 'lv' | 'en' | 'ru' => {
    const pathname = usePathname()

    const lvRegex = /^\/lv($|\/)/;
    const enRegex = /^\/en($|\/)/;
    const ruRegex = /^\/ru($|\/)/;

    switch (true) {
        case lvRegex.test(pathname):
            return 'lv';
        case enRegex.test(pathname):
            return 'en';
        case ruRegex.test(pathname):
            return 'ru';
        default:
            return 'lv';
    }
}

export default useLocaleFromPathname