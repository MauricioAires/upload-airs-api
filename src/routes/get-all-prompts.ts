import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoutes(app: FastifyInstance) {
  return app.get("/prompts", async () => {
    const prompts = await prisma.prompt.findMany();

    return prompts;
  });
}
