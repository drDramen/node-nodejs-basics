import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { getFileDirName } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const SOURCE_FILE = 'fileToCompress.txt';
const SOURCE_FILE_PATH = join(SOURCE_FOLDER_PATH, SOURCE_FILE);
const ARCHIVE_FILE = 'archive.gz';
const ARCHIVE_FILE_PATH = join(SOURCE_FOLDER_PATH, ARCHIVE_FILE);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(SOURCE_FILE_PATH);
  const destination = createWriteStream(ARCHIVE_FILE_PATH);

  await pipeline(source, gzip, destination);
};

await compress();
