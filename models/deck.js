const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const Card = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
});

const Deck = mongoose.model(
  "Deck",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    cards: {
      type: [Card],
      required: true,
    },
  })
);

const validate = (deck) => {
  const cardSchema = Joi.object({
    front: Joi.string().required(),
    back: Joi.string().required(),
  });
  const deckSchema = Joi.object({
    name: Joi.string().required(),
    cards: Joi.array().items(cardSchema.required()).required(),
  });
  return deckSchema.validate(deck);
};

exports.Deck = Deck;
exports.validate = validate;
