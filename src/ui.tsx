import * as React from 'react';
import { Box, Color, Text, useApp, useInput } from 'ink';
import { useState } from 'react';

const InkBox = require('ink-box');
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
      <Color green>
        <Text>Hello World! 🌎</Text>
      </Color>
      <InkBox
        float="center"
        margin={1}
        padding={1}
        borderColor="cyan"
        borderStyle="round"
      >
        <Text>Hello!</Text>
      </InkBox>
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
