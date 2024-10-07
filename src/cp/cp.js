import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const FILES_FOLDER_NAME = 'files';
    const FILE_NAME = 'script.js';
    const OPTIONS =  {
        stdio : [process.stdin, process.stdout, 'ignore', 'ipc']
    };

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILES_FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);
    
    //await fork(urlPath, args, OPTIONS);
    await spawn('node', [urlPath, args], OPTIONS);
}

spawnChildProcess( [11,22,33,44]);
