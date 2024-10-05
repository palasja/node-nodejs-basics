import { createReadStream, createWriteStream } from 'node:fs';
import { access, rm} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const _FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToCompress.txt';
    const _ZIP_FILE_NAME = 'archive.gz';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);

    const zipPath = join(cur_path, _FOLDER_NAME, _ZIP_FILE_NAME);
    const zipUrlPath = fileURLToPath(zipPath);

    await access(urlPath).then(
        //if file exist remove it
        async () => {
            await rm(urlPath);
        }
    )

    const gzip = createGunzip();
    await pipeline(
        createReadStream(zipUrlPath),
        gzip,
        createWriteStream(urlPath),
    );
};

await decompress();