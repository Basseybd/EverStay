import { PrismaClient } from "@prisma/client";
import exp from "constants";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
