import { join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'node:stream/promises';
import { getFileDirName } from '../helpers/index.js';

const { stdin, stdout } = process;
const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const DESTINATION_FILE = 'fileToWrite.txt';
const DESTINATION_FILE_PATH = join(SOURCE_FOLDER_PATH, DESTINATION_FILE);

const write = async () => {
  stdout.write('Type the text below and press Enter:\n');
  await pipeline(stdin, createWriteStream(DESTINATION_FILE_PATH));
};

await write();
