import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { stdout } from 'node:process';
import { Transform } from 'node:stream';
import { EOL } from "node:os";
const read = async () => {
    const _FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToRead.txt';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);
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