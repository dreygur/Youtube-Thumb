// Express
const express = require('express')
const path = require('path')

// .env Config
require('dotenv').config()

const app = express()
const router = express.Router()

const port = process.env.PORT

app.use('/', router)
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'))
})

app.get('/about', (req, res) => {
  res.send('Hi there')
})

app.listen(port, () => {
  console.log(`Youtube-Thumb-Collector app listening at http://localhost:${port}`)
})

var uri = 'https://img.youtube.com/vi/pO9-WlU7B-c/0.jpg'