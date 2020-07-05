import * as React from 'react';
import { useCallback, useEffect } from 'react';

import { pomodoroStateContext } from './context';
import { pomodoroStateReducer } from './reducer';

const PomodoroStateProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = React.useReducer(pomodoroStateReducer, {
    currentStatus: 'pomodoro-session',
    timeRemainingSeconds: 60,
  });

  const decrementCount = useCallback(() => {
    dispatch({ type: 'decrement' });
  }, []);

  useEffect(() => {
    const timer = setInterval(decrementCount, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <pomodoroStateContext.Provider value={state}>
      {children}
    </pomodoroStateContext.Provider>
  );
};

export { PomodoroStateProvider };
