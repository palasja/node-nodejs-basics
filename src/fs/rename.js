import { rename as rn, access} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const FOLDER_NAME = 'files';
    const ORIGINAL_FILE_NAME = 'wrongFilename.txt';
    const NEW_FILE_NAME = 'properFilename.md';
    const ERROR_MESSAGE = 'FS operation failed';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FOLDER_NAME);
    const urlPath = fileURLToPath(path);

    access(join(urlPath, NEW_FILE_NAME)).
    then(
        //if new file exist throw error
        () => {
            throw new Error(ERROR_MESSAGE);
        },
        async () => {
            await rn(join(urlPath, ORIGINAL_FILE_NAME), join(urlPath, NEW_FILE_NAME))
        }
    ).catch( () => {throw new Error(ERROR_MESSAGE)} )
};

await rename();