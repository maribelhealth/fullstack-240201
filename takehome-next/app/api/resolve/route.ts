import { resolveShortenedUrl } from "@/lib/api/resolveShortenedUrl";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST api/resolve
 * ----------------------------------------------------------------------------
 * Given a body parameter of `shortenedUrl`, returns the original URL passed to
 * the URL shortener
 *
 * The logic for this endpoint lives in {@link resolveShortenedUrl}; you should not
 * need to make changes to this endpont
 */
export const POST = async (req: NextRequest) => {
  const { shortenedUrl } = await req.json();
  return NextResponse.json(
    {
      url: resolveShortenedUrl(shortenedUrl),
    },
    { status: 200 }
  );
};
