class Hand {
    clubs: number[];
    diamonds: number[];
    hearts: number[];
    spades: number[];

    constructor(pbn?: string) {
        if (pbn) {
            let suits = pbn.split(".");
            this.spades = this.parseSuit(suits[0]);
            this.hearts = this.parseSuit(suits[1]);
            this.diamonds = this.parseSuit(suits[2]);
            this.clubs = this.parseSuit(suits[3]);
        } else {
            this.spades = [];
            this.hearts = [];
            this.diamonds = [];
            this.clubs = [];
        }
    }

    parseCard(s: string) {
        switch (s) {
            case "A": return 14;
            case "K": return 13;
            case "Q": return 12;
            case "J": return 11;
            case "T": return 10;
            default: return parseInt(s, 10);
        }
    }

    parseSuit(suit: string) {
        let charArray = suit.split("");
        let intArray = charArray.map(this.parseCard);
        return intArray;
    }

    gP(suit: number[]) {
        let plays = [];
        for (let ele of this.getPlays(suit)) {
            let filtered = suit.filter((f) => f !== ele);
        }
    }

    getPlays(suit: number[]) {
        let plays = [];
        let previous = 16;
        for (let card of suit) {
            if ((card + 1) !== previous) {
                plays.push(card);
            }
            previous = card;
        }
        return plays;
    }

    clone() {
        let clone = new Hand();
        clone.spades = [...this.spades];
        clone.hearts = [...this.hearts];
        clone.diamonds = [...this.diamonds];
        clone.clubs = [...this.clubs];
        return clone;
    }

    populateClone(clone: Hand) {
        if (clone.spades === undefined) { clone.spades = this.spades.slice(0); }
        if (clone.hearts === undefined) { clone.hearts = this.hearts.slice(0); }
        if (clone.diamonds === undefined) { clone.diamonds = this.diamonds.slice(0); }
        if (clone.clubs === undefined) { clone.clubs = this.clubs.slice(0); }
    }
}

export default Hand;
