// app/api/me/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = await fetch("https://your-auth-api.com/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const user = await res.json();
  return NextResponse.json(user);
}
