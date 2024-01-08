const router = require('express').Router()

const Score = require('../models/scores')
const Joke = require('../models/jokes')

// Find all
router.get('/', (req, res, next) => {
    Score.find({})
    .then(scores => { res.json(scores)})
    .catch(err => next(err))
});

// Create one
router.post('/', async (req, res) => {
    const { username, score, joke } = req.body

    if (!username || !score || !joke) {
        return res.status(400).json({ error: 'username, date, score, and joke are required' })
    }

    if (username.length < 3) {
        return res.status(400).json({ error: 'username must be at least 3 characters' })
    }

    const scoreFound = await Score.find({ username, joke });
    if (scoreFound.length > 0) {
        return res.status(400).json({ error: 'username and joke already exists' })
    }

    const jokeExists = await Joke.findById(joke)
    if (!jokeExists) {
        return res.status(400).json({ error: 'joke does not exist' })
    }

    try {
        const saveScore = new Score({ username , score, joke })
        await saveScore.save()
        return res.status(201).json({ saveScore })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


module.exports = router