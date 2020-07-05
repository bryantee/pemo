export type PomodoroStateContext = {
  currentStatus: 'pomodoro-session' | 'break-session' | 'paused' | 'idle';
  timeRemainingSeconds: number;
};

export type ActionType = 'decrement';

export type Action = {
  type: ActionType;
  payload?: {};
};
