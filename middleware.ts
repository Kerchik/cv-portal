import { NextResponse } from "next/server"

 
const locales = ['lv', 'ru', 'en']
 
export function middleware(request: any) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (!pathnameHasLocale) {
    const clonedUrl = request.nextUrl.clone()
    clonedUrl.pathname = locales[0] + clonedUrl.pathname
    return NextResponse.rewrite(clonedUrl)
  }
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next|_vercel|.*\\..*).*)'
    // Optional: only run on root (/) URL
    // '/'
  ],
}