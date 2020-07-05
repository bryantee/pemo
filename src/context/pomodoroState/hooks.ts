import { useContext } from 'react';

import { pomodoroStateContext } from './context';

const usePomodoroState = () => {
  const context = useContext(pomodoroStateContext);

  if (context === undefined) {
    throw new Error('usePomodoroState must be used within a provider');
  }

  return context;
};

export { usePomodoroState };
