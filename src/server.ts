import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";

import "dotenv/config";

import { getAllPromptsRoutes } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ia-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: process.env.CORS_ORIGIN,
});

app.register(getAllPromptsRoutes);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
  })
  .then(() => {
    console.log(`HTTP Server Running on port : ${process.env.PORT}!`);
  });
