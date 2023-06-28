import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
    name: 'fubar',
    description: 'Basic command',
    type: 1,
  };

const GINTY_COMMAND = {
  name: 'ginty',
  description: 'Basic command',
  type: 1,
};

const ALL_COMMANDS = [TEST_COMMAND, GINTY_COMMAND]

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);