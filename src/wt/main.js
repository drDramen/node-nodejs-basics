import { join } from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { getFileDirName } from '../helpers/index.js';

const { __dirname } = getFileDirName(import.meta);

const FILE_NAME = 'worker.js';
const FILE_PATH = join(__dirname, FILE_NAME);
const STARTING_NUMBER = 10;
const ERROR_OBJECT = {
  status: 'error', value: null
}

const performCalculations = async () => {
  const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(FILE_PATH, { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
  };

  const resultsFromWorkers = await Promise.allSettled(cpus().map((_, index) => runWorker(STARTING_NUMBER + index)));

  const results = resultsFromWorkers.map(r => {
    const status = r.status === 'fulfilled';
    if (!status) {
      return ERROR_OBJECT
    }

    return ({
      status: 'resolved', data: r.value
    })
  })

  console.log(results)
};

await performCalculations();
