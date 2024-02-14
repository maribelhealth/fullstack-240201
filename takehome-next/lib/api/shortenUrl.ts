import { sqliteDb } from "../utils/db";

/**
 * Asigns a unique shortened URL to the specified URL
 *
 * If the provided URL has already been shortened, this should return the
 * original shortened URL
 *
 * @param   url     The URL to shorten
 * @returns The shortened version of the URL. This should follow the format
 * `http://localhost:3030/[a-zA-Z0-9]{6,12}`
 */
export const shortenUrl = async (url: string) => {
  const db = await sqliteDb();

  // TODO: add shortening logic here
  return "http://localhost:3030/short";
};
