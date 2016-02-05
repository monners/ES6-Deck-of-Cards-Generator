import { expect } from 'chai';
import { Deck } from '../model/Deck.js';

describe('Card Deck', () => {
    it('Should have a length of 52', () => {
        let deck = new Deck;
        expect(deck._cards.length).to.equal(52);
    });

    it('Should not contain any duplicates', () => {
        let deck = new Deck;
        let flatValues = deck._cards.map(card => `${card.suit}${card.rank}`); // flatten to strings so we can compare using Set
        expect(deck._cards.length).to.equal(new Set(flatValues).size);
    });

});
