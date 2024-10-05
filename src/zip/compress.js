import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const _FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToCompress.txt';
    const _ZIP_FILE_NAME = 'archive.gz';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);

    const zipPath = join(cur_path, _FOLDER_NAME, _ZIP_FILE_NAME);
    const zipUrlPath = fileURLToPath(zipPath);

    const gzip = createGzip();
    await pipeline(
        createReadStream(urlPath),
        gzip,
        createWriteStream(zipUrlPath),
    );
};

await compress();