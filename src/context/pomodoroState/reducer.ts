import * as React from 'react';
import { PomodoroStateContext, Action, PomodoroState } from './types';

const DEFAULT_SESSION_LENGTH = 25 * 60;

export const pomodoroStateReducer: React.Reducer<PomodoroState, Action> = (
  state,
  action
): PomodoroState => {
  switch (action.type) {
    case 'decrement':
      return {
        ...state,
        timeRemainingSeconds: state.timeRemainingSeconds - 1,
      };

    case 'set-status':
      return {
        ...state,
        currentStatus: action?.payload?.status ?? 'idle',
      };

    case 'reset':
      return {
        ...state,
        currentStatus: 'pomodoro-session',
        timeRemainingSeconds: DEFAULT_SESSION_LENGTH,
      };

    default:
      return state;
  }
};
