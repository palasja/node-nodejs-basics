
import { opendir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const _FILES_FOLDER_NAME = 'files';
    const _ERROR_MESSAGE = 'FS operation failed';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FILES_FOLDER_NAME);
    const urlPath = fileURLToPath(path);

    try{
        const dir = await opendir(urlPath);
        for await (const folder of dir)
        console.log(folder.name);
    } catch(err){
        console.error(_ERROR_MESSAGE);
    }
};

await list();