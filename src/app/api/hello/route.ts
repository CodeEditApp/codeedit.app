import { NextRequest, NextResponse } from "next/server";

export function GET(_request: NextRequest): NextResponse<{ name: string }> {
  return NextResponse.json({ name: "John Doe" }, { status: 200 });
}
