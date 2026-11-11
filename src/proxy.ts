import { NextResponse, type NextRequest } from "next/server";
import { properties } from "@/lib/properties";

const knownSlugs = new Set(properties.map((property) => property.slug));

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice("/properties/".length).replace(/\/$/, "");
  if (!knownSlugs.has(slug)) {
    return new Response(
      '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Home not found | LOUIE HOMES</title></head><body><main><h1>Home not found</h1><p>This illustrative home is not in the collection.</p><a href="/properties">Explore all homes</a></main></body></html>',
      { status: 404, headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }
  return NextResponse.next();
}

export const config = { matcher: "/properties/:slug" };
