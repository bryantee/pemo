import { render } from 'ink';
import { createElement } from 'react';
import { App } from './ui';
const meow = require('meow');

const cli = meow(
  `
    Usage
      $ pemo
  `
);

type Flags = typeof cli.flags;

const main = async (args: Flags) => {
  render(createElement(App), process.stdout);
};

main(cli.flags).catch(console.error);
