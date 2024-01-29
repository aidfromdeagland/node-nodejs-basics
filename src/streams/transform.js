import { Transform } from 'stream';
import { EOL } from "os"

const transform = async () => {
    const reverseStream = new Transform({
        transform: function (chunk, encoding, callback) {
            const reversedChunk = chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL;
            this.push(reversedChunk);
            callback();
        }
    });

    return new Promise((resolve, reject) => {
        process.stdin
            .pipe(reverseStream)
            .pipe(process.stdout)
            .on('error', (error) => {
                reject(error);
            })
            .on('finish', () => {
                resolve();
            })
    });
};

await transform();
