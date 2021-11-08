const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Joke = mongoose.model("Joke", UserSchema);

module.exports = Joke;