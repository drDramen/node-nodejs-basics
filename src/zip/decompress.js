import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { getFileDirName } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const DESTINATION_FILE = 'fileToCompress.txt';
const DESTINATION_FILE_PATH = join(SOURCE_FOLDER_PATH, DESTINATION_FILE);
const ARCHIVE_FILE = 'archive.gz';
const ARCHIVE_FILE_PATH = join(SOURCE_FOLDER_PATH, ARCHIVE_FILE);

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(ARCHIVE_FILE_PATH);
  const destination = createWriteStream(DESTINATION_FILE_PATH);

  await pipeline(source, gunzip, destination);
};

await decompress();
