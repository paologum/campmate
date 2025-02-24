import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RegisterOptions,
} from "fastify";
import { getUsers } from "./user-handlers.js";
import { auth } from "./database.js";
import { User } from "shared";
import { DecodedIdToken, getAuth } from "firebase-admin/auth";

declare module "fastify" {
  interface FastifyRequest {
    user?: DecodedIdToken;
  }
}
const verifyFirebaseToken = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.code(401).send({ message: "Unauthorized: No token provided" });
      return;
    }
    const decodedToken = await auth.verifyIdToken(token);
    console.log(decodedToken);
  } catch (e) {
    res.code(401).send({ message: "Unauthorized" });
    return;
  }
};
export const userRoutes = (
  fastify: FastifyInstance,
  options: RegisterOptions
) => {
  fastify.addHook("preHandler", verifyFirebaseToken);
  fastify.get("/", getUsers);
};
