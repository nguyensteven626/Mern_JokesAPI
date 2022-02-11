//CRUD

//our controller is importing the Model
const Joke = require('../models/joke.models');

// module.exports.findAllJokes = (request, response) => {
//     Joke.find()
//         .then(allDaJokes => response.json({ jokes: allDaJokes }))
//         .catch(error => response.json({ message: 'Something went wrong', error: error }));
// }

module.exports = {
    //READ ALL
    findAllJokes: (request, response) => {
        Joke.find() //these are promises which gets resolve either by .then or .catch
            //IMPORTANT what we return here is what we receive in REACT!
            .then(allDaJokes => response.json({ jokes: allDaJokes, message: "success" }))
            .catch(error => response.json({ message: 'Something went wrong', error: error }));
    },
    //READ ONE
    findOneSingleJoke: (request, response) => {
        // Joke.findOne({ _id: request.params.id })
        //or
        Joke.findById(request.params.id)
            .then(oneSingleJoke => response.json({ user: oneSingleJoke }))
            .catch(error => response.json({ message: 'Something went wrong', error: error }));
    },
    //CREATE
    createNewJoke: (request, response) => {
        console.log(request.body) //check what objects are in the body
        const { setup } = request.body;
        Joke.create(request.body)//data from the form
            //or
            // Joke.create({setup: setup, punchline: request.body.punchline})
            .then(newlyCreatedJoke => response.json({ joke: newlyCreatedJoke }))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));
    },
    //UPDATE
    updateExistingJoke: (request, response) => {
        // /api/jokes/:id
        Joke.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => response.json({ user: updatedJoke }))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));

        //or

        // Joke.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
        //     .then(updatedJoke => response.json({ user: updatedJoke }))
        //     .catch(err => response.json({ message: 'Something went wrong', error: err }));
    },
    //DELETE
    deleteAnExistingJoke: (request, response) => {
        // /api/jokes/:id
        const {id} = request.params
        Joke.deleteOne({ _id: request.params.id })
            .then(result => response.json({ result: result }))
            .catch(err => response.json({ message: 'Something went wrong', error: err }));
        //or

        // Joke.findByIdAndDelete(request.params.id)
        //     .then(result => response.json({ result: result }))
        //     .catch(err => response.json({ message: 'Something went wrong', error: err }));
    }
}