import * as path from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'node:fs/promises';

// list.js - implement function that prints all array of filenames from files folder into console
// (if files folder doesn't exists Error with message FS operation failed must be thrown)

const list = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourcePath = path.join(dirName, 'files');

    try {
        console.log(await readdir(sourcePath));
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();