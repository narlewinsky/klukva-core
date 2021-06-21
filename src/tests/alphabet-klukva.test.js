const assert = require('chai').assert;
const latinize = require('../enter.js');

const words = {
    'йога'  : 'joga',
    'рай'   : 'raj',
    'айва'  : 'ajva',
    'яма'   : 'jama',
    'еда'   : 'jeda',
    'ёрш'   : 'jorsh',
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
    'чёрт'  : 'chort',
    'ещё'   : 'jescho',
    'жук'   : 'zhuk',
    'быт'   : 'byt',
    'зёма'  : 'zöma',
    'рожь'  : 'rozh',
    'лишь'  : 'lish',
    'дочь'  : 'doch',
    'мощь'  : 'mosch',
    'шью'   : 'shju',
};

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landshafta uzhe vyjavila zemli bogachej i procvetajuschix krestjan',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjesh jescho etix mägkix francuzskix bulok, da vypej zhe chaju'
};

describe(`Proverka nabora osnovnyx pravil orfografii po sisteme "klukva"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source, "klukva-digraphic"), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "klukva"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source, "klukva-digraphic"), pangramms[source]);
        });
    }
});
