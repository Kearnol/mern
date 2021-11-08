const JokesController = require("../controllers/joke.controllers");

module.exports = app => {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getSingleJoke);
    app.post('/api/jokes', JokesController.createJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}