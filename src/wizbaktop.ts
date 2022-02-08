import { WizBakTopRecord } from './constants/wizbaktop.interface';

export class WizBakTop<T extends string> {
    readonly wizBakTopRecord: WizBakTopRecord<T>;
    readonly moduloNumbers: T[];

    constructor(wizBakTopRecord: WizBakTopRecord<T>, moduloNumbers: T[]) {
        this.wizBakTopRecord = wizBakTopRecord;
        this.moduloNumbers = moduloNumbers;
    }

    start(num: number): string {
        let result = '';

        result += this.moduloNumbers.reduce((previous: string, modulo: string) => {
            const moduloNumber = Number.parseInt(modulo);
            return (previous +=
                num !== 0 && num % moduloNumber === 0 ? this.wizBakTopRecord[modulo as T] : '');
        }, '');

        for (const oneDigit of num.toString()) {
            if (this.wizBakTopRecord[oneDigit as T] !== undefined) {
                result += this.wizBakTopRecord[oneDigit as T];
            }
        }

        return result !== '' ? result : num.toString();
    }
}
