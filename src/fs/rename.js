import { join } from 'path';
import { rename as fsRename } from 'fs/promises';
import { FsException, getFileDirName, targetExists } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);

const SOURCE_FILE = 'wrongFilename.txt';
const SOURCE_FILE_PATH = join(SOURCE_FOLDER_PATH, SOURCE_FILE);
const NEW_FILENAME = 'properFilename.md';
const RENAMED_FILE_PATH = join(SOURCE_FOLDER_PATH, NEW_FILENAME);

const rename = async () => {
  const isSourceFileExist = await targetExists(SOURCE_FILE_PATH);
  const isRenamedFileExist = await targetExists(RENAMED_FILE_PATH);

  if (!isSourceFileExist || isRenamedFileExist) {
    throw new FsException();
  }

  await fsRename(SOURCE_FILE_PATH, RENAMED_FILE_PATH);
};

await rename();
