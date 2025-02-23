import { observable } from "mobx";

export type User = {
  id: string;
  name: string;
  age: number;
  profilePic: string;
  bio: string;
  preferredLanguage: string;
  preference: "Men" | "Women" | "No Preference";
  dateOfBirth: string;
  email: string;
};
export type State = {
  user?: User;
};

export const state: State = observable({
  user: {
    id: "1",
    name: "John Doe",
    age: 25,
    profilePic: "http://localhost:3001/public/user-images/cartoon_headshot.png",
    bio: "Hello, I am John Doe",
    preferredLanguage: "English",
    preference: "No Preference",
    dateOfBirth: "1996-01-01",
    email: "johndoe@gmail.com",
  },
});
