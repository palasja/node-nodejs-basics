import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { stdin } from 'node:process';
const write = async () => {
    const FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToWrite.txt';
    //append to file without truncate
    const options = {
        flags: 'a'
    }
    const curPath = dirname(import.meta.url);
    const path = join(curPath, FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);

    await pipeline(
        stdin,
        createWriteStream(urlPath, options)
    );
};

await write();