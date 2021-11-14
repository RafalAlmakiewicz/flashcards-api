const { Deck } = require("./models/deck");
const decks = require("./default.json");

async function seedDb() {
  await Deck.deleteMany({});
  await Deck.insertMany(decks);
  console.log("Database seeded with default data.");
}

module.exports = seedDb;
