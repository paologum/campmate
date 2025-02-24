import { FastifyRequest, FastifyReply } from "fastify";
import { auth, db } from "./database.js";

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc) => doc.data());
    return users;
  } catch (e) {
    console.error(e);
  }
  return [];
};
export const updateUser = async (
  request: FastifyRequest<{ Body: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const { id, ...data } = request.body;
    await db.collection("users").doc(id).update(data);
    reply.code(200).send({ id, ...data });
    return;
  } catch (e) {
    console.error(e);
  }
  reply.code(500).send({ error: "error updating user" });
};
