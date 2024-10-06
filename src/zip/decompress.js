import { createReadStream, createWriteStream } from 'node:fs';
import { access, rm} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToCompress.txt';
    const ZIP_FILE_NAME = 'archive.gz';

    const getUrlPath = (folderName) => {
        const curPath = dirname(import.meta.url);
        const fullPath = join(curPath, FOLDER_NAME, folderName);
        return fileURLToPath(fullPath);
    }
    const urlPath = getUrlPath(FILE_NAME);
    const zipUrlPath = getUrlPath(ZIP_FILE_NAME);
    //if file exist remove it
    await access(urlPath).then(
        
        async () => {
            await rm(urlPath);
        }
    ,() => {}
    )

    const gzip = createGunzip();
    await pipeline(
        createReadStream(zipUrlPath),
        gzip,
        createWriteStream(urlPath),
    );
};

await decompress();