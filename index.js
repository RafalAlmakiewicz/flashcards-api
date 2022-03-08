const express = require("express");
const cors = require("cors");
const decks = require("./routes/decks");
const seed = require("./routes/seed");
const mongoose = require("mongoose");
const Joi = require("joi");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/flashcards/api/decks", decks);
app.use("/flashcards/api/seed", seed);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`flashcards-api on port ${port}...`));
