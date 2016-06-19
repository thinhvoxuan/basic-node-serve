let express = require('express')
let path = require('path')
let app = express()
app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, '/views'))
app.set('view cache', false)

app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', function (req, res) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'))
  })
})

app.get('/api/hello', function (req, res) {
  res.json({
    message: 'Hello World!'
  })
})

module.exports = app
