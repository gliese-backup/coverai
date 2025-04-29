import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserFromCookies() {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("cover")?.value;
  if (cookieValue) {
    try {
      const decoded = jwt.verify(cookieValue, process.env.JWTSECRET);
      return decoded;
    } catch (err) {
      return null;
    }
  }
}
