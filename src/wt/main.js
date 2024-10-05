import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    // Write your code here

    const _FILE_NAME = 'worker.js';
    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILE_NAME);
    const urlPath = fileURLToPath(path);
    const _START_VALUE = 10
    const promiseArr = [];
    
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

    for(let i = _START_VALUE; i < _START_VALUE + availableParallelism(); i++){
        promiseArr.push(getWorkerPromise(i));
    }
    
    const res = await Promise.allSettled(promiseArr).then((results) => {
        return results.map((result) => result.value);
        }
    );

    console.log(res);
};

await performCalculations();