const VGame = require('../models/games.models')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.createVGame = (req, res) => {
    VGame.create(req.body)
    .then(newVGame => res.json(newVGame))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllVGames = (req, res) => {
    VGame.find({})
    .then(allVGames => res.json(allVGames))
    .catch(err=> res.json(err))
}

module.exports.getOneVGame =(req, res) => {
    VGame.findOne({_id: req.params.id})
    .then(vgame => res.json(vgame))
    .catch(err => res.json(err))
}

module.exports.updateVGame = (req, res) => {
    VGame.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
    )
    .then(updatedGame => res.json(updatedGame))
    .catch(err => res.status(400).json(err))
}

module.exports.destroyVGame = (req, res) => {
    VGame.deleteOne({_id: req.params.id})
    .then(deleteUser => {res.json(deleteUser)
    })
    .catch(err => res.json(err)); 
}
