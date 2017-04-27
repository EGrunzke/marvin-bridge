class Suit {
    name: string;
    ordinal: number;
    label: string;

    constructor(name: string, ordinal: number, label: string) {
        this.name = name;
        this.ordinal = ordinal;
        this.label = label;
    }
}

let clubs = new Suit("Clubs", 1, "C");
let diamonds = new Suit("Diamonds", 2, "D");
let hearts = new Suit("Hearts", 3, "H");
let spades = new Suit("Spades", 4, "S");
const suits = [clubs, diamonds, hearts, spades]

interface Rank {
    value: number;
    label: string;
}

let rankLabels = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
]

let ranks: Rank[] = []
for (let i=2; i<15; i++) {
    let r = {value: i, label: rankLabels[i-2]};
    ranks.push(r);
}

class Card {
    suit: Suit;
    rank: Rank;
    label: string;
    
    constructor(suit: Suit, rank: Rank) {
        this.suit = suit;
        this.rank = rank;
        this.label = rank.label + suit.label;
    }

    compare = function(a: Card, b: Card) {
        return a.suit != b.suit ? a.suit.ordinal - b.suit.ordinal : a.rank.value - b.rank.value
    }

    toString() {
        return this.label;
    }
}

function shuffle(collection: Array<any>): void {
    let len = collection.length;
    for (let i=0; i<len; i++) {
        let j = Math.floor(Math.random() * i);
        let tmp = collection[i];
        collection[i] = collection[j];
        collection[j] = tmp;
    }
}

function cardCompare(a: Card, b: Card) {
    return a.suit!=b.suit ? a.suit.ordinal - b.suit.ordinal : a.rank.value - b.rank.value
}

class Deal {
    west: Card[];
    east: Card[];
    south: Card[];
    north: Card[];

    constructor() {
        let deck = [];
        for (let s of suits) {
            for (let r of ranks) {
                let c = new Card(s, r);
                deck.push(c);
            }
        }
        shuffle(deck);

        this.north = deck.slice(0, 13).sort(cardCompare);
        this.south = deck.slice(13, 26).sort(cardCompare);
        this.east = deck.slice(26, 39).sort(cardCompare);
        this.west = deck.slice(39, 52).sort(cardCompare);
    }

    toString() {
        return "North: " + this.north.join(" ") + "\n" + 
            "East: " + this.east.join(" ") + "\n" + 
            "South: " + this.south.join(" ") + "\n" + 
            "West: " + this.west.join(" ") + "\n";
    }
}

class Hand {
    clubs: number[];
    diamonds: number[];
    hearts: number[];
    spades: number[];

    constructor(pbn: string) {
        let example = "N:T752.6542.5.J975 4.AT3.T743.AT864 AK963.J9.AK96.KQ QJ8.KQ87.QJ82.32"
    }
}

console.log(new Deal().toString())