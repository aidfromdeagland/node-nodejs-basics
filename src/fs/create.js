import * as path from 'path';
import { fileURLToPath } from 'url';
import { access, appendFile } from 'node:fs/promises';

// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
// (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const filePath = path.join(dirName, 'files', 'fresh.txt');

    try {
        await access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error instanceof Error && error.message === 'FS operation failed') {
            throw error;
        }

        await appendFile(filePath, 'I am fresh and young');
    }
};

await create();