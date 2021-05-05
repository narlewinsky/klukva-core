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
    'мял'   : 'mál',
    'пёс'   : 'pós',
    'люк'   : 'lúk',
    'воля'  : 'volá',
    'бобёр' : 'bobór',
    'меню'  : 'menú',
    'топь'  : 'topí',
    'мель'  : 'melí',
    'всё'   : 'vsó',
    'чёрт'  : 'cort',
    'ещё'   : 'jesco',
    'жук'   : 'ƶuk',
    'быт'   : 'byt',
    'зёма'  : 'zóma',
    'рожь'  : 'roƶ',
    'лишь'  : 'liş',
    'дочь'  : 'doc',
    'мощь'  : 'mosc',
    'шью'   : 'şíu'
}

const pangramms = {
    'Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян': 'Aerofotosjomka landşafta uƶe vyjavila zemli bogacej i proçvetajuscix krestían',
    'Съешь ещё этих мягких французских булок, да выпей же чаю': 'Sjeş jesco etix mágkix françuzskix bulok, da vypej ƶe caju'
};

describe(`Proverka nabora osnovnyx pravil orfografii po sisteme "jakovlev-1"`, () => {
    for (const source in words) {
        it(`Para slov: "${source}", "${words[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-1"), words[source]);
        });
    }
});

describe(`Proverka pangramm po sisteme "jakovlev-1"`, () => {
    for (const source in pangramms) {
        it(`Pangramma: "${source}", "${pangramms[source]}"`, () => {
            assert.equal(latinize(source, "jakovlev-1"), pangramms[source]);
        });
    }
});
