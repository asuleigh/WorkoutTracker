// DEPENDENCIES
const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 27017

const app = express()

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

var MONGODB_URI = process.env.MONGODB_URI || "http://afternoon-cliffs-68969.herokuapp.com/"
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// ROUTES
app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlRoutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})