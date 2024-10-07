import { join } from 'path';
import { rm } from 'fs/promises';
import { FsException, getFileDirName, targetExists } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const SOURCE_FILE = 'fileToRemove.txt';
const SOURCE_FILE_PATH = join(SOURCE_FOLDER_PATH, SOURCE_FILE);

const remove = async () => {
  const isSourceFileExist = await targetExists(SOURCE_FILE_PATH);

  if (!isSourceFileExist) {
    throw new FsException();
  }

  await rm(SOURCE_FILE_PATH);
};

await remove();
