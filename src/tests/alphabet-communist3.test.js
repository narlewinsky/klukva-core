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
    'чёрт'  : 'сort',
    'ещё'   : 'jesсo',
    'жук'   : 'ƶuk',
    'быт'  : 'byt',
    'зёма'  : 'zöma'
};

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landşafta uƶe vyjavila zemli bogaсej i proçvetajusсix krestjan',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjeşj jesсo etix mägkix françuzskix bulok, da vypej ƶe сaju'
};

describe(`Proverka nabora osnovnyx pravil orfografii po sisteme "communist3"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source, "communist3"), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "communist3"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source, "communist3"), pangramms[source]);
        });
    }
});
