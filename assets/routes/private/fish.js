const fish = require('../../mongo/modules/fish');

module.exports = (app) => {
    // Fish routes
    app.get('/fish/getSingleFish/:id',  fish.getSingleFish);
    app.get('/fish/getAllFish', fish.getAllFish);
}