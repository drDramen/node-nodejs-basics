import { join } from "path";
import { spawn } from 'child_process'
import { getFileDirName } from "../helpers/index.js";

const { stdin, stdout } = process
const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const FILE_NAME = 'script.js';
const FILE_PATH = join(__dirname, SOURCE_FOLDER, FILE_NAME);

const spawnChildProcess = async (args) => {
  const child = spawn('node', [FILE_PATH, ...args]);

  stdin.pipe(child.stdin)
  child.stdout.pipe(stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--fff', 'gg']);

