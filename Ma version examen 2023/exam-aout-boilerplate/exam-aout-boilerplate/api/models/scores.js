const mongoose = require('mongoose')

// Define Schema
const scoreSchema = new mongoose.Schema({
    username: String,
    date: Date,
    score: Number,
    joke: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Joke'
    }
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// export modal 
module.exports = mongoose.model('Score', scoreSchema)