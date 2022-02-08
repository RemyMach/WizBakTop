import { WizBakTop } from "../wizbaktop";
import { WizBakTopRecord, WizBakTopValues } from "./wizbaktop.interface";

export type allMyIndex = '0' | '3' | '5' | '7';
export const allMyModuloIndex: allMyIndex[] = ['3', '5', '7'];

export const wizBakTopDict: WizBakTopRecord<allMyIndex> = {
    '0': WizBakTopValues.STAR,
    '3': WizBakTopValues.WIZ,
    '5': WizBakTopValues.BAK,
    '7': WizBakTopValues.TOP,
};

export const myWizBakTop = new WizBakTop<allMyIndex>(wizBakTopDict, allMyModuloIndex);