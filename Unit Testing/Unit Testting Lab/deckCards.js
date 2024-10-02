function deckCards(input) {
  let result = [];
  const faces = new Set([
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]);
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  for (let card of input) {
    const elArr = card.split("");
    let face = "";
    let suitsHeading = elArr[card.length - 1];
    if (elArr.length === 3) {
      face = elArr[0] + elArr[1];
    } else {
      face = elArr.shift();
    }
    if (!suits.hasOwnProperty(suitsHeading) || !faces.has(face)) {
      console.log(`Invalid card: ${face + suitsHeading}`);
      return;
    }
    const cardUi = face + suits[suitsHeading];
    result.push(cardUi);
  }

  return result.join(" ");
}
console.log(deckCards(["AS", "10D", "KH", "2C"]));
deckCards(["5S", "3D", "QD", "1C"]);
