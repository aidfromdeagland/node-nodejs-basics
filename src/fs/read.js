import * as path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';

// read.js - implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

const read = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourceFile = path.join(dirName, 'files', 'fileToRead.txt');

    try {
        console.log(await readFile(sourceFile, { encoding: 'utf8' }));
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();