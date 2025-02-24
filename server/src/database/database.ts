import admin from "firebase-admin";
import serviceAccount from "../../firebaseConfig.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const db = admin.firestore();
export const auth: admin.auth.Auth = admin.auth();
