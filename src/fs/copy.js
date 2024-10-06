import { cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const ORIGINAL_FOLDER_NAME = 'files';
    const NEW_FOLDER_NAME = 'files_copy';
    const ERROR_MESSAGE = 'FS operation failed';

    const getUrlPath = (folderName) => {
        const curPath = dirname(import.meta.url);
        const fullPath = join(curPath, folderName);
        return fileURLToPath(fullPath);
    }
    
    const urlOriginalPath = getUrlPath(ORIGINAL_FOLDER_NAME);
    const urlNewlPath = getUrlPath(NEW_FOLDER_NAME);
    const options = {
        force : false, 
        errorOnExist: true,
        recursive: true
    };

    try{
        await cp(urlOriginalPath, urlNewlPath, options)
    } catch( err ){
        throw new Error(ERROR_MESSAGE);
    }
};

await copy();
