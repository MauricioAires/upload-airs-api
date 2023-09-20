import { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";
import fs from "node:fs";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post("/videos/:videoId/transcription", async (req, reply) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    });

    const { videoId } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      prompt: z.string(),
    });

    const { prompt } = bodySchema.parse(req.body);

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      },
    });

    const videoPath = video.path;
    const audioReadStream = createReadStream(videoPath);

    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: "whisper-1",
      language: "pt",
      response_format: "json",
      temperature: 0,
      prompt,
    });

    const transcription = response.text;

    if (!response.text) {
      fs.unlink(videoPath, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
      });

      // Remover registro do video sem texto
      await prisma.video.delete({
        where: {
          id: videoId,
        },
      });

      return reply.status(400).send({
        error:
          "O sistema não foi capaz de identificar nenhum texto no vídeo. Este é um vídeo de música, que geralmente não possui texto. Por favor, selecione outro vídeo que possua áudio",
      });
    }

    await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcription,
      },
    });

    return { transcription };
  });
}
