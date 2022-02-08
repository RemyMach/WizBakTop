import { argv } from 'process';
import { myWizBakTop } from './constants/wizbaktop-game-one.constants';


function main(): void {
    if (argv.length !== 3) {
        throw new Error('you have to fill only one argument');
    }
    const args = argv[2];
    const consoleArg = Number.parseInt(args);
    if (!isNaN(consoleArg)) {
        // eslint-disable-next-line no-console
        console.log(myWizBakTop.start(Number.parseInt(args)));
    }
}

main();
