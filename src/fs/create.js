import { join } from 'path';
import { writeFile } from 'fs/promises';
import { FsException, getFileDirName, targetExists } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const FILES_FOLDER = 'files';
const FILE_NAME = 'fresh.txt';
const FILE_PATH = join(__dirname, FILES_FOLDER, FILE_NAME);
const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
  const isFileExist = await targetExists(FILE_PATH);

  if (isFileExist) {
    throw new FsException();
  }

  await writeFile(FILE_PATH, FILE_CONTENT);
};

await create();
