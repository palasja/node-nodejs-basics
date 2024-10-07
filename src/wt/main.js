import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const FILE_NAME = 'worker.js';
    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILE_NAME);
    const urlPath = fileURLToPath(path);
    const START_VALUE = 10
    let promiseArr = [];
    
    const getWorkerPromise = (val) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(urlPath, { workerData: val });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
              if (code !== 0) reject;
            })
        }).then(
            (d) => { return {status: 'resolved', data: d}},
            () => { return {status: 'error', data: null}}
        )
    }

    for(let i = START_VALUE; i < START_VALUE + availableParallelism(); i++){
        promiseArr.push(getWorkerPromise(i));
    }
    
    const promiseResult = await Promise.allSettled(promiseArr);
    const result = promiseResult.map((result) => result.value);

    console.log(result);
};

await performCalculations();