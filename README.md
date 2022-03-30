# Flashcards-api

Backend services for [Flashcards](https://github.com/RafalAlmakiewicz/flashcards). Created with Express and Mongoose.

## Hosted on Heroku

List of all decks: https://flashcards-7795.herokuapp.com/flashcards/api/decks

## All Endpoints

`flashcards/api`

`GET` `/decks` &nbsp; Get all decks.

`GET` `decks/:id` &nbsp; Get deck by id.

`POST` `/decks` &nbsp; Create new deck.

`PUT` `/decks/:id` &nbsp; Update deck.

`DELETE` `/decks/:id` &nbsp; Delete deck.

`POST` `/seed` &nbsp; Seed database with default data stored in [default.json](https://github.com/RafalAlmakiewicz/flashcards-api/blob/master/default.json) file.
