
const router = require('express').Router()


const { response } = require('express')
const Event = require("../models/events")
const NotFoundError = require('../utils/NotFoundError')



// Find all
router.get("/", (req, res, next) => {
    Event.find({})
    .then(events => res.json(events))
    .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Event.findById(req.params.id).then(event => {
    if (event) {
      res.json(event)
    } else {
      throw new NotFoundError()
    }
  }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
    Event.findByIdAndRemove(req.params.id).then(result => {
    if (result) {
      res.json(result)
    } else {
      throw new NotFoundError()
    }
  })
    .catch(err => next(err))
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body
  // Check body
  const errorMessages = []
  console.log(body.child);
  if (!body.date) errorMessages.push("date must be present")
  if (!body.child) errorMessages.push("child must be present")
  if (!body.name) errorMessages.push("name must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }
  // Check existing
  
  Event.find({child:body.child}).then(event => {
    if (event  ) {
         // Insert
         console.log(body.child);
      const event = new Event(body)
      
      event.save().then(result => {
        res.json(result)
      })
     
        .catch(err => next(err))
     
    } else {
      
      
        errorMessages.push("child must be present")
        res.status(422).json({ errorMessages })
    }
  })
    .catch(err => next(err))
})













module.exports = router