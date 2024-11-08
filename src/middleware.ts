import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Replace '&' with nothing, spaces with '-', and encoded spaces (%20) with '-'
  url.pathname = url.pathname
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/%20/g, "-")
    .replace(/-+/g, "-");
  // Redirect only if the pathname was modified
  if (url.pathname !== request.nextUrl.pathname) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
