const mongoose = require('mongoose')
const VGameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"],
        minLength: [3, "Title must be 3 characters long."]
    }
}, {timestamps: true});

const VGame = mongoose.model('VGame', VGameSchema);
module.exports = VGame
