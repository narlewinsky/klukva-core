const assert = require('chai').assert;
const latinize = require('../enter.js');

const words = {
    'йога'  : 'joga',
    'рай'   : 'raj',
    'айва'  : 'ajva',
    'яма'   : 'jama',
    'еда'   : 'jeda',
    'ёрш'   : 'jorş',
    'юла'   : 'jula',
    'маяк'  : 'majak',
    'поел'  : 'pojel',
    'буёк'  : 'bujok',
    'союз'  : 'sojuz',
    'мял'   : 'mäl',
    'пёс'   : 'pös',
    'люк'   : 'lük',
    'воля'  : 'volä',
    'бобёр' : 'bobör',
    'меню'  : 'menü',
    'топь'  : 'topj',
    'мель'  : 'melj',
    'всё'   : 'vsö',
    'чёрт'  : 'çort',
    'ещё'   : 'jesço',
    'жук'   : 'żuk',
    'быт'   : 'byt',
    'зёма'  : 'zöma',
    'рожь'  : 'roż',
    'лишь'  : 'liş',
    'дочь'  : 'doç',
    'мощь'  : 'mosç',
    'шью'   : 'şju',
};

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landşafta uże vyjavila zemli bogaçej i procvetajusçix krestjan',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjeş jesço etix mägkix francuzskix bulok, da vypej że çaju'
};

describe(`Proverka nabora osnovnyx pravil orfografii po sisteme "modern"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "modern"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source), pangramms[source]);
        });
    }
});
