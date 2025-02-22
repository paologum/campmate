import { action } from "mobx";
import { state } from "./state";

export const nothing = action((newval: number) => {
  state.state = newval;
});
