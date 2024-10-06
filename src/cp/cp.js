import { fork } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const _FILES_FOLDER_NAME = 'files';
    const _FILE_NAME = 'script.js';
    const _OPTIONS =  {
        stdio : [process.stdin, process.stdout, 'ignore', 'ipc']
    };

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILES_FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);
    
    await fork(urlPath, args, _OPTIONS);
}

spawnChildProcess( [11,22,33,44]);
