import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastifyStatic from "@fastify/static";

dotenv.config();
const fastify = Fastify({ logger: true });
fastify.register(cors, {
  origin: "*",
});
fastify.register(fastifyStatic, {
  root: `${__dirname}/public`,
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

start();
