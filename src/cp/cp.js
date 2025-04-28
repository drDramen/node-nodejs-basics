import { join } from "node:path";
import { spawn } from 'node:child_process'
import { getFileDirName } from "../helpers/index.js";

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const FILE_NAME = 'script.js';
const FILE_PATH = join(__dirname, SOURCE_FOLDER, FILE_NAME);

const spawnChildProcess = async (args) => {
    spawn('node', [FILE_PATH, ...args], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--fff', 'gg']);

