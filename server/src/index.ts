import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastifyStatic from "@fastify/static";
import { db } from "./database/database.js";

dotenv.config();
const fastify = Fastify({ logger: true });
fastify.register(cors, {
  origin: "*",
});
fastify.register(fastifyStatic, {
  root: process.cwd() + "/public",
  prefix: "/public/",
  decorateReply: false,
});
fastify.get("/users", async (request, reply) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc) => doc.data());
    return users;
  } catch (e) {
    console.error(e);
  }
  return [];
});
const start = async () => {
  try {
    await fastify.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3001,
      host: "0.0.0.0",
    });
    console.log(
      `🚀 Fastify server running on http://localhost:${
        process.env.PORT || 3001
      }`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

await start();
