import { NextResponse } from "next/server";
import { healthcheck } from "../../../lib/api/healthcheck";

export const GET = async () => {
  const healthcheckResult = await healthcheck();
  return NextResponse.json({
    status: healthcheckResult ? "ok" : "fail",
  });
};
