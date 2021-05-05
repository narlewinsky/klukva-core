
Modulj perevoda teksta iz russkoj kirillicy v russkuju latinicu.

Ssylki: [Demo Translätora](http://narlewinsky.online/klukva-translator),
[Statja o latinizacii russkogo alfavita na Medium](https://narlewinsky.medium.com/vozrożdenije-latinicy-epoxi-russkogo-avangarda-fb9ade3c6116).


# Ustanovka

    npm install klukva-core

# Ispoljzovanije

Modulj perevodit slova lüboj dliny, primenäja pravila orfografii. Naprimer:

    const latinize = require('klukva-core');
    console.log(latinize('Аэрофотосъёмка ландшафта уже выявила земли богачей и процветающих крестьян'));

Vyvedet latinskij perevod:

    Aerofotosjomka landşafта uże vyjavila zemli bogaçej i procvetajusçix krestjan

Także vozmożno ispoljzovanije opcionaljnogo perevoda na osnove tröx variantov latinicy, predlożennyx komissijej po razrabotke projekta o latinizacii russkogo alfavita vo glave s professorom N. F. Jakovlevym:

    console.log(latinize('Проект Н. Ф. Яковлева, номер 1: устраняющий диактритические знаки.', 'jakovlev-1'));
    console.log(latinize('Проект Н. Ф. Яковлева, номер 2: стремящийся к максимальному использованию наличных в типографиях латинских символов.', 'jakovlev-2'));
    console.log(latinize('Проект Н. Ф. Яковлева, номер 3: на основе яналифа, или нового тюрского алфавита.', 'jakovlev-3'));
