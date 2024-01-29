
// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2,
// you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
    const argumentsMap = {};
    const cliArgs = process.argv.slice(2);
    cliArgs.forEach((arg, index, array) => {
        if (index % 2 === 0) {
            argumentsMap[arg.slice(2)] = array[index + 1];
        }
    });

    const stringifiedArgs = Object.entries(argumentsMap)
        .map(([key, value]) => `${key} is ${value}`)
        .join(', ');

    console.log(stringifiedArgs);
};

parseArgs();