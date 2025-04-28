import { stdout } from 'node:process';
import { join } from 'node:path';
import { createReadStream } from 'node:fs';
import { getFileDirName } from '../helpers/index.js';

const { createHash } = await import('node:crypto');
const { __dirname } = getFileDirName(import.meta);

const SOURCE_FOLDER = 'files';
const SOURCE_FOLDER_PATH = join(__dirname, SOURCE_FOLDER);
const SOURCE_FILE = 'fileToCalculateHashFor.txt';
const SOURCE_FILE_PATH = join(SOURCE_FOLDER_PATH, SOURCE_FILE);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(SOURCE_FILE_PATH);

    input.on('data', (chunk) => {
        hash.update(chunk);
    });

    input.on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();
