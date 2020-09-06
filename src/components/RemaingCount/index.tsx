import * as React from 'react';
import { Box, Text } from 'ink';

const BigText = require('ink-big-text');

import { usePomodoroState } from '../../context/pomodoroState/hooks';
import { displayStatus, displayTime } from '../../utils/format';

type Props = {};

export const RemainingCount: React.FC<Props> = (props) => {
  const { timeRemainingSeconds, currentStatus } = usePomodoroState();

  return (
    <Box justifyContent="center" alignItems="center" flexDirection="column">
      <BigText text={displayTime(timeRemainingSeconds)} />
      <Text bold>Current status: {displayStatus(currentStatus)}</Text>
    </Box>
  );
};
