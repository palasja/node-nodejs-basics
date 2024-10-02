import { rename as rn, access} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const _FOLDER_NAME = 'files';
    const _ORIGINAL_FILE_NAME = 'wrongFilename.txt';
    const _NEW_FILE_NAME = 'properFilename.md';
    const _ERROR_MESSAGE = 'FS operation failed';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME);
    const urlPath = fileURLToPath(path);

    access(join(urlPath, _NEW_FILE_NAME)).
    then(
        //if new file exist throw error
        () => {
            throw Error(_ERROR_MESSAGE);
        },
        async () => {
            await rn(join(urlPath, _ORIGINAL_FILE_NAME), join(urlPath, _NEW_FILE_NAME))
        }
    ).catch( () => console.error(_ERROR_MESSAGE) )
};

await rename();