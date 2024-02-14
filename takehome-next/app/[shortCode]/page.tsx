import { redirect } from "next/navigation";
import { resolveShortenedUrl } from "../../lib/api/resolveShortenedUrl";

export type RedirectablePageProps = {
  params: {
    shortCode: string;
  };
};

/**
 * handles redirecting our short URL to the original URL
 */
export default async function RedirectablePage({
  params: { shortCode },
}: RedirectablePageProps) {
  const originalUrl = await resolveShortenedUrl(
    `http://localhost:3030/${shortCode}`
  );
  return redirect(originalUrl);
}
