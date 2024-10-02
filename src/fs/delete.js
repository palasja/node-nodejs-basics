
import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const _FILES_FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToRemove.txt';
    const _ERROR_MESSAGE = 'FS operation failed';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILES_FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);

    try{
        await rm(urlPath);
    } catch(err){
        console.error(_ERROR_MESSAGE);
    }
};

await remove();