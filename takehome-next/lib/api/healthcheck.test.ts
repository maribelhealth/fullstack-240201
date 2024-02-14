import { sqliteDb } from "../utils/db";
import { healthcheck } from "./healthcheck";

describe("healthcheck", () => {
  it("can verify the db is getting results", async () => {
    (sqliteDb as jest.Mock).mockResolvedValue({
      run: jest.fn(() => []),
    });
    expect(await healthcheck()).toBe(true);
  });

  it("can flag that the db is not getting results", async () => {
    (sqliteDb as jest.Mock).mockResolvedValue({
      run: jest.fn(() => undefined),
    });
    expect(await healthcheck()).toBe(false);
  });
});

jest.mock("../utils/db.ts", () => ({
  sqliteDb: jest.fn(),
}));
