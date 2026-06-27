import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = [
    {
      id: 1,
      name: "Sahil",
    },
    {
      id: 2,
      name: "Rahul",
    },
  ];
  return NextResponse.json(user, { status: 200 });
}
