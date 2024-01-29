import * as path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises'

const decompress = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourcePath = path.join(dirName, 'files', 'archive.gz');
    const destinationPath = path.join(dirName, 'files', 'fileToCompress.txt');

    await pipeline(
        createReadStream(sourcePath),
        zlib.createGunzip(),
        createWriteStream(destinationPath),
    );

};

await decompress();