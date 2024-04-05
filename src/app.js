const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send({"data": "Hello World!"})
})

module.exports = app;