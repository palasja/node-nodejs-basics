import { cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const _ORIGINAL_FOLDER_NAME = 'files';
    const _NEW_FOLDER_NAME = 'files_copy';
    const _ERROR_MESSAGE = 'FS operation failed';

    let getUrlPath = (folderName) => {
        let cur_path = dirname(import.meta.url);
        let fullPath = join(cur_path, folderName);
        return fileURLToPath(fullPath);
    }
    
    const urlOriginalPath = getUrlPath(_ORIGINAL_FOLDER_NAME);
    const urlNewlPath = getUrlPath(_NEW_FOLDER_NAME);
    let options = {
        force : false, 
        errorOnExist: true,
        recursive: true
    };

    try{
        await cp(urlOriginalPath, urlNewlPath, options)
    } catch( err ){
        console.error(_ERROR_MESSAGE);
    }
};

await copy();
