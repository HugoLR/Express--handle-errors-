const express = require('express')
const app = express()
const port = 3002
const fs = require('fs')

app.get('/', (req, res, next) => {
  fs.readFile(`${__dirname}/index.html`, "utf8", (err, data) => {
    res.send(data)
  })
})

//Handle 404
app.use((req, res, next) => {
    res.status(404).send({message:"404. Not Found"})
    next()
  });

//Handle 500
app.use((req, res, next) => {
  return res.status(500).send({message:"500. Server Error"})
})

app.listen(port, () => {
  console.log("Running in port 3001")
})
