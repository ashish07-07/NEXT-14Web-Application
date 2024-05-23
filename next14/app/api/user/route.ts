import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  const session = await getServerSession();
  Response.json({
    session,
  });
}
