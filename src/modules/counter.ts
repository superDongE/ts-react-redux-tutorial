import {
  createStandardAction,
  ActionType,
  createReducer,
} from "typesafe-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
  count: number;
};

const initalState: CounterState = {
  count: 0,
};

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initalState)
  .handleAction(INCREASE, (state) => ({ count: state.count + 1 }))
  .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
  .handleAction(INCREASE_BY, (state, action) => ({
    count: state.count + action.payload,
  }));
//

// const counter = createReducer<CounterState, CounterAction>(initalState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

// function counter(
//   state: CounterState = initalState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };

//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

export default counter;
