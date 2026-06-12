"use server";

import { z } from "zod";
import { getServerConfig } from "../config.server";

const schema = z.object({ name: z.string().min(1) });

export async function getGreeting(input: { name: string }) {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid input");
  }
  const { name } = parsed.data;
  const config = getServerConfig();
  return {
    greeting: `Hello, ${name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
