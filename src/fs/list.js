import { join } from "path";
import { readdir } from "fs/promises";
import { FsException, getFileDirName, targetExists } from "../helpers/index.js";

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);

const list = async () => {
  const isSourceFolderExist = await targetExists(SOURCE_FOLDER_PATH);

  if (!isSourceFolderExist) {
    throw new FsException();
  }

  const files = await readdir(SOURCE_FOLDER_PATH);

  console.table(files)
};

await list();
