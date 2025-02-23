import { action } from "mobx";
import { state, User } from "./state";

export const setUser = action((user: User) => {
  state.user = user;
});
