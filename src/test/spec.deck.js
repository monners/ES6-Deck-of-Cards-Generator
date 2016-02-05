import { expect } from 'chai';
import { Deck } from '../model/Deck.js';

describe('Deck', () => {
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

describe('dealCard', () => {
    it('Should return a card object with index, suit, and rank properties', () => {
        let deck = new Deck;
        let card = deck.dealCard();
        expect(card.hasOwnProperty('index') && card.hasOwnProperty('suit') && card.hasOwnProperty('rank')).to.be.true;
    });

    it('Should remove dealt card from the deck', () => {
        let deck = new Deck;
        let card = deck.dealCard();
        let remainingCardIndexes = deck._cards.map(card => card.index);
        expect(remainingCardIndexes.indexOf(card.index)).to.equal(-1);
    });
});
