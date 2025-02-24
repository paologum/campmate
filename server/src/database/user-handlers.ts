import { FastifyRequest, FastifyReply } from "fastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  reply.code(500).send({ error: "Error updating user" });
};

export const loginUser = async (
  request: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply
) => {
  try {
    const { email, password } = request.body;
    const userCred = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    const user = userCred.user;
    const refreshToken = user.refreshToken;
    console.log("refreshToken", refreshToken);
    reply.code(200).send({ user, refreshToken });
    return;
  } catch (e) {
    console.error(e);
  }
  reply.code(500).send({ error: "Error logging in" });
};

export const createUser = async (
  request: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply
) => {
  try {
    const { email, password } = request.body;
    const userCred = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    const user = userCred.user;
    const refreshToken = user.refreshToken;
    console.log("refreshToken", refreshToken);
    reply.code(200).send({ user, refreshToken });
    return;
  } catch (e) {
    console.error(e);
  }
  reply.code(500).send({ error: "Error creating user" });
};
