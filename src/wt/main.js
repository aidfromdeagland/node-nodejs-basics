import os from 'os';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const dirName = fileURLToPath(new URL('.', import.meta.url));
    const workerPath = path.join(dirName, 'worker.js');
    const cpuCores = os.cpus().length;
    const startNumber = 10;

    const workersData = Array.from(
        new Array(cpuCores),
        (element, index) => {
            return new Promise((resolve) => {
                const handleError = () => { resolve({ status: 'error', data: null }) };
                const worker = new Worker(workerPath, { workerData: startNumber + index });
                worker.on('message', (result) => { resolve(result) })
                worker.on('error', handleError)
                worker.on('exit', (code) => {
                    if (code !== 0) {
                        handleError();
                    }
                });
            });
        });

    const workersResults = await Promise.all(workersData);
    console.log(workersResults);
};

await performCalculations();