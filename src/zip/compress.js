import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToCompress.txt';
    const ZIP_FILE_NAME = 'archive.gz';

    let getUrlPath = (folderName) => {
        let curPath = dirname(import.meta.url);
        let fullPath = join(curPath, FOLDER_NAME, folderName);
        return fileURLToPath(fullPath);
    }
    const urlPath = getUrlPath(FILE_NAME);
    const zipUrlPath = getUrlPath(ZIP_FILE_NAME);

    const gzip = createGzip();
    await pipeline(
        createReadStream(urlPath),
        gzip,
        createWriteStream(zipUrlPath),
    );
};

await compress();