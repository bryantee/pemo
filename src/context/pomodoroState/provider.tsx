import * as React from 'react';
import { useCallback, useEffect } from 'react';

import { pomodoroStateContext } from './context';
import { pomodoroStateReducer } from './reducer';
import { PomodoroStatus } from './types';

let timer: NodeJS.Timeout;

const PomodoroStateProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = React.useReducer(pomodoroStateReducer, {
    currentStatus: 'pomodoro-session',
    timeRemainingSeconds: 5,
  });

  const decrementCount = useCallback(() => {
    dispatch({ type: 'decrement' });
  }, []);

  const setStatus = useCallback((status: PomodoroStatus) => {
    dispatch({ type: 'set-status', payload: { status } });
  }, []);

  const { timeRemainingSeconds } = state;

  useEffect(() => {
    if (timeRemainingSeconds === 0) {
      setStatus('break-session');
      clearInterval(timer);
    }
  }, [timeRemainingSeconds]);

  useEffect(() => {
    timer = setInterval(decrementCount, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <pomodoroStateContext.Provider value={state}>
      {children}
    </pomodoroStateContext.Provider>
  );
};

export { PomodoroStateProvider };
