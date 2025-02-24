import { createContext } from "react";
import { state } from "./state";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as actions from "./actions";
import Config from "../env.json";

const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
  appId: Config.FIREBASE_APP_ID,
};
console.log(Config);
console.log("SDLFKJSDLF");

// ✅ Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export type State = typeof state;
export type Actions = typeof actions;
export { state, actions };

export type Context = {
  state: State;
  actions: Actions;
};
export const initialContext = { state, actions };
export const context = createContext<Context>(initialContext);
