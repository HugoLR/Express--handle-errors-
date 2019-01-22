const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const fs = require('fs')

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

app.listen(port, () => {
  console.log("Running in port 3000")
})
