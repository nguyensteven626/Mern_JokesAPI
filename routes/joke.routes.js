//importing controller
const JokeController = require('../controllers/joke.controllers');
// console.log(JokeController);

module.exports = app => {
    app.get('/api/hello', (request, response) => {
        response.json({message: "hello"})
    })
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}