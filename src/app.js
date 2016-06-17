let express = require('express')
let swig = require('swig')
let path = require('path')
let app = express()
app.set('port', process.env.PORT || 3000)

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/views'))
app.set('view cache', false)
swig.setDefaults({ cache: false })

app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', function (req, res) {
  res.render('index', {
    /* template locals context */
  })
})

app.get('/api/hello', function (req, res) {
  res.json({
    message: 'Hello World!'
  })
})

module.exports = app
