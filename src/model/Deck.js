import { arrayFromRange } from '../utils/Utils.js';

class Deck {
    constructor() {
        this._cards = [];
        this._populate();
        this.shuffle();
    }

    _populate() {
        this._cards = arrayFromRange(0, 51).map((card, i) => this._constructCard(i));
    }

    _constructCard(i) {
        const suits = ['Club', 'Diamond', 'Heart', 'Spade'];
        const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

        return {
            index: i,
            suit: suits[i % 4],
            rank: ranks[i % 13]
        };
    }

    hasCards() {
        return this._cards.length > 0;
    }

    get cardsLeft() {
        return this._cards.length;
    }

    shuffle() {
        let i = this._cards.length, j, temp;
        if (i === 0) {
            return false;
        }

        while (--i) {
            j = Math.floor( Math.random() * (i + 1) );
            temp = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }
    }

    dealCard() {
        return this.hasCards() ? this._cards.pop() : null;
    }
}

export { Deck };
