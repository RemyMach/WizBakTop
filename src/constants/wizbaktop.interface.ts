export enum WizBakTopValues {
    // eslint-disable-next-line no-unused-vars
    WIZ = 'Wiz',
    // eslint-disable-next-line no-unused-vars
    BAK = 'Bak',
    // eslint-disable-next-line no-unused-vars
    TOP = 'Top',
    // eslint-disable-next-line no-unused-vars
    STAR = '*',
}

export type WizBakTopRecord<T extends string> = Record<T, WizBakTopValues>;
