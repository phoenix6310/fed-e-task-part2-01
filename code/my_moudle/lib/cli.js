#!/usr/bin/env node
'use strict';
const meow = require('meow');
const myMoudle = require('./');

const cli = meow(`
Usage
  $ my_moudle [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ my_moudle
  unicorns
  $ my_moudle rainbows
  unicorns & rainbows
`);
