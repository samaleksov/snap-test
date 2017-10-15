const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Snap!')
})

app.listen(3000, function () {
  console.log('Example snap listening on port 3000!')
})
