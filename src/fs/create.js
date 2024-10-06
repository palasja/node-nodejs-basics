import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const FILES_FOLDER_NAME = 'files';
    const FILE_NAME = 'fresh.txt';
    const TEXT = 'I am fresh and young';
    const ERROR_MESSAGE = 'FS operation failed';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILES_FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);
    const options = {flag: 'wx'};

    try{
        await writeFile(urlPath, TEXT, options);
    } catch(err){
        throw new Error(ERROR_MESSAGE);
    }
};

await create();