import { createAction } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

type CounterAction =
  | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
  | { type: 'RESET' };

// createAction
const increment = createAction('INCREMENT', (amount: number) => ({
  payload: amount,
}));

// const incrementAction = increment(3);

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case increment.type:
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};
