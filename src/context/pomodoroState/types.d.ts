export type PomodoroStatus =
  | 'pomodoro-session'
  | 'break-session'
  | 'paused'
  | 'idle';

export type PomodoroStateContext = {
  currentStatus: PomodoroStatus;
  timeRemainingSeconds: number;
};

export type ActionType = 'decrement' | 'reset' | 'set-status' | 'set-count';

export type Action = {
  type: ActionType;
  payload?: {
    status?: PomodoroStatus;
  };
};
