import { NextRequest, NextResponse } from "next/server"
 
const locales = ['lv', 'ru', 'en']
 
export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/lv${pathname.startsWith('/') ? '' : '/'}${pathname}`
  
  return NextResponse.rewrite(url)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
   '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}