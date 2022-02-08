import { should } from 'chai';
import { describe, it } from 'mocha';
import { WizBakTop } from './wizbaktop';
import { WizBakTopRecord, WizBakTopValues } from "./constants/wizbaktop.interface";

should();

describe('Test testing configuration', () => {
    it('Sanity check of testing', () => {
        Number(1).should.equal(1);
    });
});

describe('Test wizBakTop game', () => {
    type allMyIndex = '0' | '3' | '5' | '7';
    const allMyModuloIndex: allMyIndex[] = ['3', '5', '7'];

    const wizBakTopDict: WizBakTopRecord<allMyIndex> = {
        '0': WizBakTopValues.STAR,
        '3': WizBakTopValues.WIZ,
        '5': WizBakTopValues.BAK,
        '7': WizBakTopValues.TOP,
    };

    const myWizBakTop = new WizBakTop<allMyIndex>(wizBakTopDict, allMyModuloIndex);

    it('when passing 1 should return 1', () => {
        myWizBakTop.start(1).should.equal('1');
    });

    it('when passing 2 should return 2', () => {
        myWizBakTop.start(2).should.equal('2');
    });

    it('when passing 3 should return "WizWiz', () => {
        myWizBakTop.start(3).should.equal('WizWiz');
    });

    it('when passing 5 should return "BakBak', () => {
        myWizBakTop.start(5).should.equal('BakBak');
    });

    it('when passing 6 should return "Wiz', () => {
        myWizBakTop.start(6).should.equal('Wiz');
    });

    it('when passing 15 should return "WizBakBak', () => {
        myWizBakTop.start(15).should.equal('WizBakBak');
    });

    it('when passing 33 should return "WizWizWiz', () => {
        myWizBakTop.start(33).should.equal('WizWizWiz');
    });

    it('when passing 35 should return "BakTopWizBak', () => {
        myWizBakTop.start(35).should.equal('BakTopWizBak');
    });

    it('when passing 357 should return "WizTopWizBakTop', () => {
        myWizBakTop.start(357).should.equal('WizTopWizBakTop');
    });

    it('when passing 703 should return "Top*Wiz', () => {
        myWizBakTop.start(703).should.equal('Top*Wiz');
    });

    it('when passing 13705 should return "BakWizTop*Bak', () => {
        myWizBakTop.start(13705).should.equal('BakWizTop*Bak');
    });

    it('when passing 0 should return "*', () => {
        myWizBakTop.start(0).should.equal('*');
    });
});
