"use server";
import { cookies } from "next/headers";
export async function fetcher(url: string, method = "GET", form = null) {
  const formData = form ? JSON.stringify(form) : undefined;
  const cookieStore = await cookies();
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookieStore.get("auth_token")?.value}`,
    },
    body: formData,
    cache: "no-store",
  });
  try {
    return await res.json();
  } catch (e) {
    console.log(e);
    return {};
  }
}
