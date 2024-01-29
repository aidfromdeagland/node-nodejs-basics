import * as path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(dirName, 'files', 'fileToRead.txt');

    return new Promise((resolve, reject) => {
        const readFileStream = createReadStream(filePath)
            .on('end', () => {
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });

        readFileStream
            .pipe(process.stdout)
            .on('error', (error) => {
                reject(error);
            });
    });
};

await read();