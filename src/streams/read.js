import { join } from 'path';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getFileDirName } from '../helpers/index.js';

const { stdout } = process;
const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const SOURCE_FILE = 'fileToRead.txt';
const SOURCE_FILE_PATH = join(SOURCE_FOLDER_PATH, SOURCE_FILE);

const read = async () => {
  await pipeline(createReadStream(SOURCE_FILE_PATH), stdout);
};

await read();
