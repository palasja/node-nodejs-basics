import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const _FILES_FOLDER_NAME = 'files';
    const _FILE_NAME = 'fresh.txt';
    const _TEXT = 'I am fresh and young';
    const _ERROR_MESSAGE = 'FS operation failed';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILES_FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);
    const options = {flag: 'wx'};

    try{
        await writeFile(urlPath, _TEXT, options);
    } catch(err){
        console.error(_ERROR_MESSAGE);
    }
};

await create();