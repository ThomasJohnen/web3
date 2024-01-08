const {MONGODB_URI, PORT} = require('./utils/config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const middlewares = require('./utils/middlewares')
const actionsRouter = require('./routes/actions')
const placesRouter = require('./routes/places')


// Connect to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Unable to connect to database", err))

// Create server
const app = express()

// Init server
app.use(cors())
app.use(express.json())
app.use(middlewares.logger)
app.use(middlewares.errorHandler)
app.use("/actions", actionsRouter)
app.use("/places", placesRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})