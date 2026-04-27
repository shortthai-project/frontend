import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { NextRequest } from "next/server";
import type { Locale } from "next-intl";

const handleI18nRouting = createMiddleware(routing);

function createRequestWithoutFirstSegment(
  request: NextRequest,
  restSegments: string[],
) {
  const rewrittenUrl = new URL(request.url);
  rewrittenUrl.pathname = `/${restSegments.join("/")}`;

  return new NextRequest(rewrittenUrl, request);
}

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);
  const [firstSegment, ...restSegments] = segments;

  if (firstSegment) {
    const isTwoLetterLocaleCandidate = /^[a-zA-Z]{2}$/.test(firstSegment);
    const isSupportedLocale = routing.locales.includes(firstSegment as Locale);

    if (isTwoLetterLocaleCandidate && !isSupportedLocale) {
      return handleI18nRouting(
        createRequestWithoutFirstSegment(request, restSegments),
      );
    }
  }

  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - trpc (tRPC API routes)
     * - _vercel (Vercel-specific files)
     * - metadata files or the ones containing a dot (e.g. `favicon.ico`)
     */
    "/((?!api|_next/static|_next/image|trpc|_vercel|.*\\..*).*)",
  ],
};