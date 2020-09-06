import React from 'react';
import { Box, Text, useInput } from 'ink';

import { usePomodoroState } from '../../context/pomodoroState/hooks';

type Props = {
  showInstructions: boolean;
};

export const ActionHandler: React.FC<Props> = (props) => {
  const { start, pause } = usePomodoroState();

  useInput((input) => {
    if (input === 's') {
      start();
    } else if (input === 'p') {
      pause();
    }
  });

  return (
    <Box marginTop={2}>
      {props.showInstructions ? (
        <Text italic>Press "s" to start or "p" to pause</Text>
      ) : null}
    </Box>
  );
};
