import { expect } from 'chai';
import { Deck } from '../src/model/Deck.js';
import { arrayFromRange } from '../src/utils/Utils.js';

describe('Deck', () => {
    it('Should have a length of 52', () => {
        let deck = new Deck();
        expect(deck._cards.length).to.equal(52);
    });

    it('Should not contain any duplicates', () => {
        let deck = new Deck();
        let flatValues = deck._cards.map(card => `${card.suit}${card.rank}`); // flatten to strings so we can compare using Set
        expect(deck._cards.length).to.equal(new Set(flatValues).size);
    });

});

describe('dealCard', () => {
    it('Should return a card object with index, suit, and rank properties', () => {
        let deck = new Deck();
        let card = deck.dealCard();
        expect(card.hasOwnProperty('index') && card.hasOwnProperty('suit') && card.hasOwnProperty('rank')).to.be.true;
    });

    it('Should remove dealt card from the deck', () => {
        let deck = new Deck();
        let card = deck.dealCard();
        let remainingCardIndexes = deck._cards.map(card => card.index);
        expect(remainingCardIndexes.indexOf(card.index)).to.equal(-1);
    });

    it('Should return null if no cards are left in the deck', () => {
        let deck = new Deck();

        while(!!deck._cards.length) {
            deck.dealCard();
        }

        expect(deck.dealCard()).to.equal(null);
    });
});

describe('arrayFromRange', () => {
    it('Should return an array populated with all values between from and to', () => {
        // Check expected input yields correct length
        expect(arrayFromRange(0, 51).length).to.equal(52);
        // Check extreme min input yields correct values at indexes
        expect(arrayFromRange(10, 11)[0]).to.equal(10);
        expect(arrayFromRange(10, 11)[1]).to.equal(11);
    });
});

describe('shuffle', () => {
    it('Should return false if deck is empty', () => {
        let deck = new Deck();

        while(!!deck._cards.length) {
            deck.dealCard();
        }

        expect(deck.shuffle()).to.be.false;
    });
});
