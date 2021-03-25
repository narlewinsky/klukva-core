
const alphabetModern = require("./maps/modern.js");
const alphabetCommunist1 = require("./maps/communist1.js");
const alphabetCommunist2 = require("./maps/communist2.js");
const alphabetCommunist3 = require("./maps/communist3.js");

const iotatedDigraphs = require("./iotatedDigraphs.js");
const iotatedBasics = require("./iotatedBasics.js");

//
// Spisok bukv nekotryx kategorij, neobxodimyj dlä proverki pravil orfografii

const hushings  = ["Ж", "ж", "Ш", "ш", "Щ", "щ", "Ч", "ч"];
const iotateds  = ["Е", "е", "Ё", "ё", "Ю", "ю", "Я", "я"];
const vowels    = ['А', 'а', 'О', 'о', 'У', 'у', 'Ы', 'ы', 'Э', 'э', 'Я', 'я', 'Ё', 'ё', 'Ю', 'ю', 'И', 'и', 'Е', 'е' ];
const softSigns = ['Ь', 'ь'];
const hardSigns = ['Ъ', 'ъ'];

//
// Funkcija romanizacii.
// V kaçestve argumenta prinimajet tekstovyje dannyje dlä preobrazovanija.

function latinize(data, basedOn = "modern") {
    var lastChar = "";
    var alphabet = alphabetModern;

    switch (basedOn) {
        case "communist1":
            alphabet = alphabetCommunist1;
            break;
        case "communist2":
            alphabet = alphabetCommunist2;
            break;
        case "communist3":
            alphabet = alphabetCommunist3;
            break;
        default:
    }

    var result = data.split('').map((char) => {
        if (iotateds.includes(char)) {
            if (!(lastChar in alphabet) || hardSigns.includes(lastChar) || vowels.includes(lastChar)) {
                lastChar = char;
                return iotatedDigraphs[char];
            }

            if (hushings.includes(lastChar) || softSigns.includes(lastChar)) {
                lastChar = char;
                return iotatedBasics[char];
            }
        }

        lastChar = char;
        return (char in alphabet) ? alphabet[char] : char;
    });

    return result.join('');
}

module.exports = latinize;
