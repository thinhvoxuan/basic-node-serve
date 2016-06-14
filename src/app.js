let express = require('express')

let app = express()
app.set('port', process.env.PORT || 3000)
app.get('/', function (req, res) {
  res.send('Hello World!')
})
module.exports = app
