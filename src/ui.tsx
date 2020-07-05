import * as React from 'react';
import { useState } from 'react';
import { Box, Text, useApp, useInput } from 'ink';

import { PomodoroStateProvider } from './context/pomodoroState';
import { RemainingCount } from './components/RemaingCount';

const BigText = require('ink-big-text');

const App = () => {
  const [isQuitting, setIsQuitting] = useState(false);
  const { exit } = useApp();

  useInput((input, key) => {
    if (input === 'q') {
      setIsQuitting(true);
      exit();
    }
  });

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin={2}
    >
      <BigText font="simple3d" text="Pemo" />
      <PomodoroStateProvider>
        <RemainingCount />
      </PomodoroStateProvider>
      <Box marginTop={2}>
        {isQuitting ? (
          <Text>QUITTING</Text>
        ) : (
          <Text italic>Press 'q' to quit</Text>
        )}
      </Box>
    </Box>
  );
};

export { App };
