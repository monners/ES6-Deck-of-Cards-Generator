import { expect } from 'chai';
import { Deck } from '../model/Deck.js';

describe('Card Deck', () => {
    it('Should have a length of 52', () => {
        let deck = new Deck;
        expect(deck._cards.length).to.equal(52);
    });

    it('Should not contain any duplicates', () => {
        let deck = new Deck;
        expect(deck._cards.length).to.equal(new Set(deck._cards).size);
    });

});
