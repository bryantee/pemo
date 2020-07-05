import * as React from 'react';
import { PomodoroStateContext, Action } from './types';

export const pomodoroStateReducer: React.Reducer<
  PomodoroStateContext,
  Action
> = (state, action): PomodoroStateContext => {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        timeRemainingSeconds: state.timeRemainingSeconds - 1,
      };

    default:
      return state;
  }
};
