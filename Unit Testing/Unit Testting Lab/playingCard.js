function playingCard(faceCard, suitsCard) {
  const faces = new Set([2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]);
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (!faces.has(faceCard)) {
    throw Error("Invalid face");
  }

  if (!suits.hasOwnProperty(suitsCard)) {
    throw Error("Invalid Suits");
  }

  return {
    face: faceCard,
    suits: suits[suitsCard],
    toString: function () {
      return this.face + this.suits;
    },
  };
}
console.log(playingCard(1, "C").toString());

