import { sqliteDb } from "../utils/db";

/**
 * generates the list of all urls that have been shortened with this shortener.
 * @returns a list of paired URLs, represented by the `UrlPair` type
 */
export const getAllUrls = async (): Promise<UrlPair[]> => {
  const db = await sqliteDb();

  // TODO: return all url pairs
  return [
    {
      original: "http://amuchlongerurl.com/than/woud/be/pleasant/to/?type=in",
      shortened: "http://localhost:3000/short",
    },
  ];
};

type UrlPair = {
  original: string;
  shortened: string;
};
