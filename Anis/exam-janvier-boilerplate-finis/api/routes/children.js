const router = require('express').Router()

const Children = require("../models/children")
const NotFoundError = require('../utils/NotFoundError')



// Find all
router.get("/", (req, res, next) => {
    Children.find({})
    .then(childrens => res.json(childrens))
    .catch(err => next(err))
})

// Find by ID
router.get("/:id", (req, res, next) => {
    Children.findById(req.params.id).then(children => {
    if (children) {
      res.json(children)
    } else {
      throw new NotFoundError()
    }
  }).catch(err => next(err))
})

// Delete one
router.delete("/:id", (req, res, next) => {
  Children.findByIdAndRemove(req.params.id).then(result => {
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
  if (!body.name) errorMessages.push("name must be present")
  if (!body.birthDate) errorMessages.push("birthDate must be present")
  if (!body.gender) errorMessages.push("gender must be present")
  if(body.name.length <3)  errorMessages.push("name caractere must be  more than 3present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }
  // Check existing
  Children.find({ name: body.name }).then(children => {
    if (children && children.length >0) {
      errorMessages.push("name must be unique")
      res.status(422).json({ errorMessages })
    } else {
      // Insert
      const children = new Children(body)
      children.save().then(result => {
        res.json(result)
      })
        .catch(err => next(err))
    }
  })
    .catch(err => next(err))
})






module.exports = router