import * as React from 'react';
import { Box, Text } from 'ink';

import { usePomodoroState } from '../../context/pomodoroState/hooks';
import { displayTime } from '../../utils/format';

type Props = {};

export const RemainingCount: React.FC<Props> = (props) => {
  const { timeRemainingSeconds, currentStatus } = usePomodoroState();

  return (
    <Box flexDirection="column">
      <Text bold>Current status: {currentStatus}</Text>
      <Text bold>Time remaining: {displayTime(timeRemainingSeconds)}</Text>
    </Box>
  );
};
