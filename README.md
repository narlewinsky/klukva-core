
Modulj perevoda teksta iz russkoj kirillicy v russkuju latinicu.

# Ustanovka

    npm install klukva-core

# Ispoljzovanije

Modulj perevodit slova lüboj dliny, primenäja pravila orfografii. Naprimer:

    const latinize = require('klukva-core');
    console.log(latinize('Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян'));

Vyvedet latinskij perevod:

    Aerofotosjomka landşafта uże vyjavila zemli bogaçej i procvetajusçix krestjan

Także vozmożno ispoljzovanije opcionaljnogo perevoda na osnove tröx variantov latinicy, predlożennyx komissijej po razrabotke projekta o latinizacii russkogo alfavita vo glave s professorom N. F. Jakovlevym:

    console.log(latinize('Советская латинизация, 1ый проект.', 'communist1'));
    console.log(latinize('Советская латинизация, 2ой проект.', 'communist2'));
    console.log(latinize('Советская латинизация, 3ий проект.', 'communist3'));
