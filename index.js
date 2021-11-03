const express = require('express')
const app = express()

app.get('/frasier', (req, res) => {
    res.send("frasier")
})

app.get('/niles', (req, res) => {
    res.send("niles")
})

app.get('/daphne', (req, res) => {
    res.send("daphne")
})

app.listen(3000, () => {
    console.log("Hello, Seattle.  I'm listening...")
})