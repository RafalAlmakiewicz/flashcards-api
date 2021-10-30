const express = require("express");
const router = express.Router();
const { Deck, validate } = require("../models/deck");
const validateId = require("../middleware/validateId");

router.get("/", async (req, res) => {
  const decks = await Deck.find();
  res.send(decks);
});

router.get(`/:id`, validateId, async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  if (!deck) return res.status(404).send("not found");
  res.send(deck);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let deck = new Deck({
    name: req.body.name,
    cards: req.body.cards,
  });
  await deck.save();
  res.send(deck);
});

router.put(`/:id`, validateId, async (req, res) => {
  const deck = await Deck.findById(req.params.id);
  if (!deck) return res.status(404).send("not found");
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  deck.name = req.body.name;
  deck.cards = req.body.cards;
  await deck.save();
  res.send(deck);
});

router.delete(`/:id`, validateId, async (req, res) => {
  const deck = await Deck.findByIdAndRemove(req.params.id);
  if (!deck) return res.status(404).send("not found");
  res.send(deck);
});

module.exports = router;
