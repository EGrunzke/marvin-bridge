import Game from "../src/game";

describe("Game Spec", () => {
    it("Should parse a north deal", () => {
        let pbn = "N:QJ75.8.A8.KQT987 A83.9732.J942.J3 T42.JT54.Q765.54 K96.AKQ6.KT3.A62"
        let game = new Game(pbn);
        expect(game.north.spades).toEqual([12, 11, 7, 5]);
        expect(game.east.spades).toEqual([14, 8, 3]);
        expect(game.south.spades).toEqual([10, 4, 2]);
        expect(game.west.spades).toEqual([13, 9, 6]);
    });
    
    it("Should parse an east deal", () => {
        let pbn = "E:QJ75.8.A8.KQT987 A83.9732.J942.J3 T42.JT54.Q765.54 K96.AKQ6.KT3.A62"
        let game = new Game(pbn);
        expect(game.east.hearts).toEqual([8]);
        expect(game.south.hearts).toEqual([9, 7, 3, 2]);
        expect(game.west.hearts).toEqual([11, 10, 5, 4]);
        expect(game.north.hearts).toEqual([14, 13, 12, 6]);
    });
    
    it("Should parse a south deal", () => {
        let pbn = "S:J82.QJT85.653.98 AT54.A942.J9.T65 Q973.7.Q84.K7432 K6.K63.AKT72.AQJ"
        let game = new Game(pbn);
        expect(game.south.diamonds).toEqual([6, 5, 3]);
        expect(game.west.diamonds).toEqual([11, 9]);
        expect(game.north.diamonds).toEqual([12, 8, 4]);
        expect(game.east.diamonds).toEqual([14, 13, 10, 7, 2]);
    });
    
    it("Should parse a west deal", () => {
        let pbn = "W:5.KQT3.AK5.AQT95 QT2.J987654.74.K 98764..QJT96.862 AKJ3.A2.832.J743"
        let game = new Game(pbn);
        expect(game.west.clubs).toEqual([14, 12, 10, 9, 5]);
        expect(game.north.clubs).toEqual([13]);
        expect(game.east.clubs).toEqual([8, 6, 2]);
        expect(game.south.clubs).toEqual([11, 7, 4, 3]);
    });
})