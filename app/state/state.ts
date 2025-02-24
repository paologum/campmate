import { observable } from "mobx";
import { User } from "shared";

export type State = {
  user?: User;
};

export const state: State = observable({
  user: {
    id: 1,
    name: "John Doe",
    age: 25,
    profilePic: "http://localhost:3001/public/user-images/cartoon_headshot.png",
    bio: "Hello, I am John Doe",
    preferredLanguage: "English",
    preference: "No Preference",
    dateOfBirth: {
      _seconds: 0,
      _nanoseconds: 0,
    },
    email: "johndoe@gmail.com",
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
});
