import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { stdout } from 'node:process';
import { Transform } from 'node:stream';
import { EOL } from "node:os";
const read = async () => {
    const FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToRead.txt';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);
    //Transform add EOL for save response in console
    await pipeline(
        createReadStream(urlPath),
        new Transform({
            transform(chunk, _encoding, callback) {
              callback(null, chunk.toString() + EOL);
            },
          }),
        stdout,
    );
};

await read();