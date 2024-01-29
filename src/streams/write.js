import * as path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(dirName, 'files', 'fileToWrite.txt');

    return new Promise((resolve, reject) => {
        const writeFileStream = createWriteStream(filePath)
            .on('finish', () => {
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });

        process.stdin.pipe(writeFileStream);
    });

};

await write();