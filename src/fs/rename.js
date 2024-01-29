import * as path from 'path';
import { fileURLToPath } from 'url';
import { access, rename as fsRename } from 'node:fs/promises';

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md 
// if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

const rename = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourceFile = path.join(dirName, 'files', 'wrongFilename.txt');
    const destinationFile = path.join(dirName, 'files', 'properFilename.md');

    const [sourceFileAccessCheck, destinationFileAccessCheck] = await Promise.allSettled([access(sourceFile), access(destinationFile)]);
    if (sourceFileAccessCheck.status === 'fulfilled' && destinationFileAccessCheck.status === 'rejected') {
        await fsRename(sourceFile, destinationFile);
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();