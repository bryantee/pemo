import { createContext } from 'react';

import { PomodoroStateContext } from './types';

const pomodoroStateContext = createContext<PomodoroStateContext | undefined>(
  undefined
);

export { pomodoroStateContext };
