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
    'чёрт'  : 'cort',
    'ещё'   : 'jesco',
    'жук'   : 'ƶuk',
    'быт'   : 'byt',
    'зёма'  : 'zöma',
    'рожь'  : 'roƶ',
    'лишь'  : 'liş',
    'дочь'  : 'doc',
    'мощь'  : 'mosc',
    'шью'   : 'şju'
};

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landşafta uƶe vyjavila zemli bogacej i proçvetajuscix krestjan',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjeş jesco etix mägkix françuzskix bulok, da vypej ƶe caju'
};

describe(`Proverka nabora osnovnyx pravil orfografii po sisteme "jakovlev-2"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-2"), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "jakovlev-2"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-2"), pangramms[source]);
        });
    }
});
