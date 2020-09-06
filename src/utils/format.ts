import { PomodoroStatus } from '../context/pomodoroState/types';

const displayTime = (timeSecs: number): string => {
  return `${_getMinutes(timeSecs)}:${_padZero(_getSeconds(timeSecs))}`;
};

const _getMinutes = (timeSecs: number): number => Math.trunc(timeSecs / 60);

const _getSeconds = (timeSecs: number): number => timeSecs % 60;

const _padZero = (timeSecs: number): string => {
  if (timeSecs < 10) {
    return `0${timeSecs}`;
  }

  return timeSecs.toString();
};

const displayStatus = (status: PomodoroStatus): string => {
  switch (status) {
    case 'break-session':
      return 'Break';
    case 'paused':
      return 'Paused';
    case 'pomodoro-session':
      return 'Pomo Session';
    case 'idle':
    default:
      return status;
  }
};

export { displayStatus, displayTime };
