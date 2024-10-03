import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const _FOLDER_NAME = 'files';
    const _FILE_NAME = 'fileToCalculateHashFor.txt';
    const _CRYPTO_ENCODE = 'sha256';
    const _OUTPUT_ENCODE = 'hex';

    const cur_path = dirname(import.meta.url);
    const path = join(cur_path, _FOLDER_NAME, _FILE_NAME);
    const urlPath = fileURLToPath(path);

    const input = createReadStream(urlPath);
    const hash = createHash(_CRYPTO_ENCODE);

    input.on('readable', () =>{
        const data = input.read();
        if(data){
            hash.update(data);
        } else {
            console.log(hash.digest(_OUTPUT_ENCODE));
        }
    })
};

await calculateHash();