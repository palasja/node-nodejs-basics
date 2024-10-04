import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { EOL } from "node:os";
const transform = async () => {
    await pipeline(
        stdin,
        new Transform({
            transform(chunk, _encoding, callback) {
              callback(null, chunk.toString().split('').reverse().join().trim().replaceAll(',','') + EOL);
            },
          }),
        stdout
    );
};

await transform();