
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const _FILES_FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToRead.txt';
    const _ERROR_MESSAGE = 'FS operation failed';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILES_FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);
    const options = { encoding: 'utf8' };

    try{
       const fileContent = await readFile(urlPath, options);
       console.log(fileContent);
    } catch(err){
        console.error(_ERROR_MESSAGE);
    }
};

await read();