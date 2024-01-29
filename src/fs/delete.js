import * as path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'node:fs/promises';

// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

const remove = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourceFile = path.join(dirName, 'files', 'fileToRemove.txt');

    try {
        await rm(sourceFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();