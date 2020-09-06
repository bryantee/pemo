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

  const start = () => {
    if (currentStatus === 'break-session') {
      dispatch({ type: 'reset' });
    } else {
      dispatch({ type: 'decrement' });
      dispatch({ type: 'set-status', payload: { status: 'pomodoro-session' } });
    }
  };

  const pause = () => {
    dispatch({ type: 'set-status', payload: { status: 'paused' } });
    clearInterval(timer);
  };

  const { timeRemainingSeconds, currentStatus } = state;

  useEffect(() => {
    if (timeRemainingSeconds === 0) {
      setStatus('break-session');
      clearInterval(timer);
    }
  }, [timeRemainingSeconds]);

  useEffect(() => {
    if (currentStatus == 'pomodoro-session') {
      timer = setInterval(decrementCount, 1000);
    }

    return () => clearInterval(timer);
  }, [currentStatus]);

  return (
    <pomodoroStateContext.Provider value={{ ...state, start, pause }}>
      {children}
    </pomodoroStateContext.Provider>
  );
};

export { PomodoroStateProvider };
