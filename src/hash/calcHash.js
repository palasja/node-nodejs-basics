import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const FOLDER_NAME = 'files';
    const FILE_NAME = 'fileToCalculateHashFor.txt';
    const CRYPTO_ENCODE = 'sha256';
    const OUTPUT_ENCODE = 'hex';

    const curPath = dirname(import.meta.url);
    const path = join(curPath, FOLDER_NAME, FILE_NAME);
    const urlPath = fileURLToPath(path);

    const input = createReadStream(urlPath);
    const hash = createHash(CRYPTO_ENCODE);

    input.on('readable', () =>{
        const data = input.read();
        if(data){
            hash.update(data);
        } else {
            console.log(hash.digest(OUTPUT_ENCODE));
        }
    })
};

await calculateHash();