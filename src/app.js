let express = require('express')

let app = express()
app.set('port', process.env.PORT || 3000)
app.get('/', function (req, res) {
  res.json({
    message: 'Hello World!'
  })
});
module.exports = app
