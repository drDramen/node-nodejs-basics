import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';
import { getReverseString } from '../helpers/index.js';

const { stdin, stdout } = process;

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      const reverseData = getReverseString(data.toString().trim());
      callback(null, reverseData + '\n');
    },
  });

  stdout.write('Type the text below and press Enter:\n');
  await pipeline(stdin, transformStream, stdout);
};

await transform();
