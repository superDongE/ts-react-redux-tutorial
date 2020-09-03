import { ActionType } from "typesafe-actions";
import * as action from "./actions";

export type TodosAction = ActionType<typeof action>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
