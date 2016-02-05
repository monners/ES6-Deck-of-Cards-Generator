import { Deck } from './model/Deck';

global.app = function () {
    let deck = new Deck;

    for (let i = 0; i < 52; i++) {
        console.log(deck.dealCard());
    }
};
