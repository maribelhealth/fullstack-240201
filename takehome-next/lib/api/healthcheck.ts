import { sqliteDb } from "../utils/db";

/**
 * verifies that the database is up and running
 */
export const healthcheck = async () => {
  const db = await sqliteDb();
  return !!db.run("SELECT * FROM urls");
};
