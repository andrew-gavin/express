const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Have a very good day!  :) </h1>')
})

// Use Heroku's dynamic port or default to 8080 locally
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
