
const alphabetKlukva = require('./maps/klukva.js');
const alphabetJakovlev1 = require('./maps/jakovlev-1.js');
const alphabetJakovlev2 = require('./maps/jakovlev-2.js');
const alphabetJakovlev3 = require('./maps/jakovlev-3.js');

const iotatedDigraphs = require('./iotatedDigraphs.js');
const iotatedBasics = require('./iotatedBasics.js');

//
// Spisok bukv nekotryx kategorij, neobxodimyj dlä proverki pravil orfografii

const hushings  = ['Ж', 'ж', 'Ш', 'ш', 'Щ', 'щ', 'Ч', 'ч'];
const iotateds  = ['Е', 'е', 'Ё', 'ё', 'Ю', 'ю', 'Я', 'я'];
const vowels    = ['А', 'а', 'О', 'о', 'У', 'у', 'Ы', 'ы', 'Э', 'э', 'Я', 'я', 'Ё', 'ё', 'Ю', 'ю', 'И', 'и', 'Е', 'е' ];
const softSigns = ['Ь', 'ь'];
const hardSigns = ['Ъ', 'ъ'];

//
// Funkcija romanizacii.
// V kaçestve argumenta prinimajet tekstovyje dannyje dlä preobrazovanija.

function latinize(data, basedOn = 'modern') {
    var alphabet = alphabetKlukva;

    switch (basedOn) {
        case 'jakovlev-1':
            alphabet = alphabetJakovlev1;
            break;
        case 'jakovlev-2':
            alphabet = alphabetJakovlev2;
            break;
        case 'jakovlev-3':
            alphabet = alphabetJakovlev3;
            break;
        default:
    }

    var result = data.split('').map((char, i, arr) => {
        const lastChar = arr[i-1] || '';
        const nextChar = arr[i+1] || '';

        if (iotateds.includes(char)) {
            if (!(lastChar in alphabet) || hardSigns.includes(lastChar) || vowels.includes(lastChar)) {
                return iotatedDigraphs[char];
            }

            if (hushings.includes(lastChar) || softSigns.includes(lastChar)) {
                return iotatedBasics[char];
            }
        }

        if (!(nextChar in alphabet) && softSigns.includes(char) && hushings.includes(lastChar)) {
            return '';
        }

        return (char in alphabet) ? alphabet[char] : char;
    });

    return result.join('');
}

module.exports = latinize;
