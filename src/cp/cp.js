import * as path from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args = []) => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const scriptPath = path.join(dirName, 'files', 'script.js');
    const childProcess = fork(scriptPath, args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

spawnChildProcess([1, 2, 3, 4, 'kek']);
