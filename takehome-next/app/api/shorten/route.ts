import { shortenUrl } from "@/lib/api/shortenUrl";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST api/shorten
 * ----------------------------------------------------------------------------
 * Given a body parameter of `url`, returns the shortened version of the
 * provided URL
 *
 * The logic for this endpoint lives in {@link shortenUrl}; you should not
 * need to make changes to this endpont
 */
export const POST = async (req: NextRequest) => {
  const { url } = await req.json();
  return NextResponse.json(
    {
      shortenedUrl: shortenUrl(url),
    },
    { status: 200 }
  );
};
