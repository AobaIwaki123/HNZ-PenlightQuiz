"use server";

import { sql } from "@vercel/postgres";

export const getMemberCount = async () => {
  const { rows } = await sql`SELECT COUNT(*) from penlight_quiz`;
  console.log(rows);
}
