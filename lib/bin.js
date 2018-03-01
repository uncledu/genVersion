#!/usr/bin/env node


'use strict';

import GenVersion from './index';
import yargs from 'yargs';
import child_process from 'child_process';

let argv = yargs.usage('Usage: $0').example('$0 ', 'auto set the version in package.json var current branch;if the branch name is daily/1.0.0,set the value 1.0.0').help('h').alias('h', 'help').global('[help]').argv;

try {
  let genVersion = new GenVersion(argv);
  genVersion();
} catch (err) {
  console.error(err);
  process.exit(1);
}