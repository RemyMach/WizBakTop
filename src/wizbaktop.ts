import { WizBakTopRecord } from './constants/wizbaktop.interface'

export class WizBakTop<T extends string> {
    readonly wizBakTopRecord: WizBakTopRecord<T>;
    readonly moduloNumbers: T[];

    constructor(wizBakTopRecord: WizBakTopRecord<T>, moduloNumbers: T[]) {
        this.wizBakTopRecord = wizBakTopRecord;
        this.moduloNumbers = moduloNumbers;
    }

    start(num: number): string {
        let result = '';
        for (const oneRecord of this.moduloNumbers) {
            const oneRecordNumber = Number.parseInt(oneRecord);
            if (num !== 0 && num % oneRecordNumber === 0) {
                result += this.wizBakTopRecord[oneRecord as T];
            }
        }

        for (const oneDigit of num.toString()) {
            if (this.wizBakTopRecord[oneDigit as T] !== undefined) {
                result += this.wizBakTopRecord[oneDigit as T];
            }
        }

        return result !== '' ? result : num.toString();
    }
}
