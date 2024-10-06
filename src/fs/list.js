
import { opendir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const FILES_FOLDER_NAME = 'files';
    const ERROR_MESSAGE = 'FS operation failed';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FILES_FOLDER_NAME);
    const urlPath = fileURLToPath(path);

    try{
        const dir = await opendir(urlPath);
        for await (const folder of dir)
        console.log(folder.name);
    } catch(err){
        throw new Error(ERROR_MESSAGE);
    }
};

await list();