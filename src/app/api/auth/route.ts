import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const tokenValue = req.cookies.get('user_session')?.value;
  if (!tokenValue) {
    return NextResponse.json({ status: 401 });
  }
  return NextResponse.json({ tokenValue });
}
