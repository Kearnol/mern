const Joke = require('../models/joke.model')
//functions that will manage CRUD controls go here. They are accessed by routes. 
module.exports.getAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", "error": err}))
}

module.exports.getSingleJoke = (req, res) => {
    Joke.findOne({id:req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Something went wrong", "error": err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({message: "New Joke successfully added", joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", "error": err}))
}

module.exports.updateJoke = (req, res) => {
    console.log(req.params.id)
    Joke.findOneAndUpdate(
        {id: req.params.id},
        req.body,
        {new: true}
    ).then(updatedUser => res.json({ user: updatedUser, "reqParams": req.params.id }))
    .catch(err => res.json({message: "Something went wrong", "error": err}))
}

module.exports.deleteJoke = (res, req) => {
    console.log(req.params.id)
    Joke.deleteOne({id: req.params.id})
    .then(result => res.json({message:"That joked was trash(-ed)...", 'result': result}))
    .catch(err => res.json({message: "Something went wrong", "error": err}))
}
