
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const FILES_FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToRead.txt';
    const ERROR_MESSAGE = 'FS operation failed';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILES_FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);
    const options = { encoding: 'utf8' };

    try{
       const fileContent = await readFile(urlPath, options);
       console.log(fileContent);
    } catch(err){
        throw new Error(ERROR_MESSAGE);
    }
};

await read();