const { Deck } = require("./models/deck");

const decks = [
  {
    name: "Polish - food",
    cards: [
      {
        front: "sausage",
        back: "kiełbasa",
      },
      {
        front: "pancakes",
        back: "naleśniki",
      },
      {
        front: "beef",
        back: "wołowina",
      },
    ],
  },
  {
    name: "Polish - sports",
    cards: [
      {
        front: "basketball",
        back: "koszykówka",
      },
      {
        front: "football",
        back: "piłka nożna",
      },
      {
        front: "voleyball",
        back: "siatkówka",
      },
    ],
  },
];

async function seedDb() {
  await Deck.deleteMany({});
  await Deck.insertMany(decks);
  console.log("Database seeded with default data.");
}

module.exports = seedDb;
