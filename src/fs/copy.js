import { copyFile, mkdir, readdir } from 'fs/promises';
import { join } from 'path';
import { FsException, getFileDirName, targetExists } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const DESTINATION_FOLDER = 'files_copy';
const DESTINATION_FOLDER_PATH = join(__dirname, DESTINATION_FOLDER);

const copy = async () => {
  const isSourceFolderExist = await targetExists(SOURCE_FOLDER_PATH);
  const isDestinationFolderExist = await targetExists(DESTINATION_FOLDER_PATH);

  if (!isSourceFolderExist || isDestinationFolderExist) {
    throw new FsException();
  }

  await mkdir(DESTINATION_FOLDER_PATH);
  const files = await readdir(SOURCE_FOLDER_PATH);

  await Promise.all(
      files.map(async (file) => {
        const sourceFilePath = join(SOURCE_FOLDER_PATH, file);
        const destinationFilePath = join(DESTINATION_FOLDER_PATH, file);
        return copyFile(sourceFilePath, destinationFilePath);
      })
  );
};

await copy();
