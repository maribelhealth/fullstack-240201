import { sqliteDb } from "../utils/db";

/**
 * Translates a shortened URL into the original URL that generated it
 * @param   shortenedUrl    The shortened URL to resolve back
 * @returns The original URL that generated the provided shortened URL
 */
export const resolveShortenedUrl = async (shortenedUrl: string) => {
  const db = await sqliteDb();
  // TODO: return the shortened version of the url
  return "http://amuchlongerurl.com/than/woud/be/pleasant/to/?type=in";
};
