import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { stdin } from 'node:process';
const write = async () => {
    const _FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToWrite.txt';
    //append to file without truncate
    const options = {
        flags: 'a'
    }
    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);

    await pipeline(
        stdin,
        createWriteStream(urlPath, options)
    );
};

await write();