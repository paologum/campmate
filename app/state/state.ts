import { observable } from "mobx";

export type State = {
  state: number;
};

export const state: State = observable({
  state: 0,
});
