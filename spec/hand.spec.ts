import Hand from "../src/hand";

describe("Hand Spec", () => {
    it("Should parse a normal hand", () => {
        let pbn = "T752.6542.5.J975"
        let hand = new Hand(pbn);
        expect(hand.spades).toEqual([10, 7, 5, 2]);
        expect(hand.hearts).toEqual([6, 5, 4, 2]);
        expect(hand.diamonds).toEqual([5]);
        expect(hand.clubs).toEqual([11, 9, 7, 5]);
    });

    it("Should parse a void", () => {
        let pbn = "T752.65432..J975"
        let hand = new Hand(pbn);
        expect(hand.spades).toEqual([10, 7, 5, 2]);
        expect(hand.hearts).toEqual([6, 5, 4, 3, 2]);
        expect(hand.diamonds).toEqual([]);
        expect(hand.clubs).toEqual([11, 9, 7, 5]);
    });

    it("Should parse all card values", () => {
        let pbn = "...AKQJT98765432"
        let hand = new Hand(pbn);
        expect(hand.spades).toEqual([]);
        expect(hand.hearts).toEqual([]);
        expect(hand.diamonds).toEqual([]);
        expect(hand.clubs).toEqual([14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    });

    it("Should create one chunk", () => {
        let pbn = "...AKQJT98765432"
        let hand = new Hand(pbn);
        expect(hand.getPlays(hand.clubs)).toEqual([14]);
    });

    it("Should chunk playable cards", () => {
        let pbn = "T752.65432..J975"
        let hand = new Hand(pbn);
        expect(hand.getPlays(hand.spades)).toEqual([10, 7, 5, 2]);
        expect(hand.getPlays(hand.hearts)).toEqual([6]);
        expect(hand.getPlays(hand.diamonds)).toEqual([]);
        expect(hand.getPlays(hand.clubs)).toEqual([11, 9, 7, 5]);
    });
})