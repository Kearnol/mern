const VGamesController = require (`../controllers/games.controllers`)

module.exports = (app) => {
    app.get('/index', VGamesController.index);
    app.post('/api/vgames', VGamesController.createVGame);
    app.get('/api/vgames', VGamesController.getAllVGames);
    app.get('/api/vgames/:id', VGamesController.getOneVGame);
    app.put('/api/vgames/:id', VGamesController.updateVGame);
    app.delete('/api/vgames/:id', VGamesController.destroyVGame)
}