import * as path from 'path';
import { fileURLToPath } from 'url';
import { cp, access, mkdir } from 'node:fs/promises';

// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)

const copy = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourcePath = path.join(dirName, 'files');
    const destinationPath = path.join(dirName, 'files_copy');

    try {
        await access(sourcePath);
        await mkdir(destinationPath);
        await cp(sourcePath, destinationPath, { recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
