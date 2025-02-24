import { FastifyInstance, RegisterOptions } from "fastify";
import { createUser, loginUser } from "./user-handlers.js";

export const loginRoutes = (
  fastify: FastifyInstance,
  options: RegisterOptions
) => {
  fastify.post("/signup", createUser);
  fastify.post("/login", loginUser);
};
