const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('*', (req,res) => {
  res.redirect('/index.html')
})

app.listen(5000, function() {
  console.log("Server on pordil 5000");
})