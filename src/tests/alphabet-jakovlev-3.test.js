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
    'мял'   : 'məl',
    'пёс'   : 'pɵs',
    'люк'   : 'lyk',
    'воля'  : 'volə',
    'бобёр' : 'bobɵr',
    'меню'  : 'meny',
    'топь'  : 'topj',
    'мель'  : 'melj',
    'всё'   : 'vsɵ',
    'чёрт'  : 'cort',
    'ещё'   : 'jesco',
    'жук'   : 'ƶuk',
    'быт'   : 'bьt',
    'зёма'  : 'zɵma',
    'рожь'  : 'roƶ',
    'лишь'  : 'liş',
    'дочь'  : 'doc',
    'мощь'  : 'mosc',
    'шью'   : 'şju'
}

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landşafta uƶe vьjavila zemli bogacej i proçvetajuscix krestjan',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjeş jesco etix məgkix françuzskix bulok, da vьpej ƶe caju'
};

describe(`Proverka nabora osnovnьx pravil orfografii po sisteme "jakovlev-3"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-3"), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "jakovlev-3"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-3"), pangramms[source]);
        });
    }
});
