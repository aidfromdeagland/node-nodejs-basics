import * as path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises'

const compress = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const sourcePath = path.join(dirName, 'files', 'fileToCompress.txt');
    const destinationPath = path.join(dirName, 'files', 'archive.gz');

    await pipeline(
        createReadStream(sourcePath),
        zlib.createGzip(),
        createWriteStream(destinationPath),
    );

};

await compress();