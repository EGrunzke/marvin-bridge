import Hand from "./Hand";

class Game {
    north: Hand;
    east: Hand;
    south: Hand;
    west: Hand;

    contract: number;
    trump: Suit;

    nsTricks: number;
    ewTricks: number;
    next: Seat;

    constructor(pbn: string) {
        // "W:5.KQT3.AK5.AQT95 QT2.J987654.74.K 98764..QJT96.862 AKJ3.A2.832.J743"
        // 0=W 1=N 2=E 3=S
        let offset = this.getOffset(pbn.charAt(0));
        let hands = pbn.slice(2).split(" ");
        this.north = new Hand(hands[(0 + offset) % 4]);
        this.east = new Hand(hands[(1 + offset) % 4]);
        this.south = new Hand(hands[(2 + offset) % 4]);
        this.west = new Hand(hands[(3 + offset) % 4]);
    }

    private getOffset(dealer: string) {
        switch (dealer) {
            case "N": return 0;
            case "E": return 3;
            case "S": return 2;
            case "W": return 1;
            default: return -1;
        }
    }
}

export default Game;
