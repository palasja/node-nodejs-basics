
import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const FILES_FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToRemove.txt';
    const ERROR_MESSAGE = 'FS operation failed';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILES_FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);

    try{
        await rm(urlPath);
    } catch(err){
        throw new Error(ERROR_MESSAGE);
    }
};

await remove();