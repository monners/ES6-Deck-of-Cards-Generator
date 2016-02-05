class Deck {
    constructor() {
        this._cards = [];
        this._populate();
        this._shuffle();
    }

    _populate() {
        this._cards = this._range(0, 52).map((card, i) => this._constructCard(i));
    }

    _range(from, to) {
        return Array.from(new Array(to - from)).map((x, i) => i + from);
    }

    _shuffle() {
        let i = this._cards.length, j, temp;
        if (i === 0) return false;

        while (--i) {
            j = Math.floor( Math.random() * (i + 1) );
            temp = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }
    }

    _cardsLeft() {
        return this._cards.length > 0;
    }

    _constructCard(i) {
        const suits = ['Club', 'Diamond', 'Heart', 'Spade'];
        const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

        return {
            index: i,
            suit: (() => suits[i % 4])(),
            rank: (() => ranks[i % 13])()
        };
    }

    dealCard() {
        return this._cardsLeft() ? this._cards.pop() : null;
    }
}

export { Deck };
