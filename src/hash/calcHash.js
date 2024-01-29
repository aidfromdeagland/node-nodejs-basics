import * as path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(dirName, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    hash.setEncoding('hex');

    return new Promise((resolve, reject) => {
        const stream = createReadStream(filePath);
        stream
            .on('error', () => {
                reject(error);
            })
            .pipe(hash)
            .on('finish', () => {
                const hashResult = hash.read();
                console.log(hashResult);
                resolve(hashResult);
            })
            .on('error', () => {
                reject(error);
            })
    });
};

await calculateHash();