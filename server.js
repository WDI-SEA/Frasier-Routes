//Import express
const express = require('express')
//Create an instance of the express app
const app = express()
//testing base/root address (using the /)
app.get("/", (req, res) => {
    res.send("Hello, Seattle, I'm listening")
})
//listen to port 3000
app.listen(3000)

//Create a GET route for /frasier
app.get("/frasier", (req, res) => {
    res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be")
})

app.get("/niles", (req, res) => {
    res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")
})

app.get("/daphne", (req, res) => {
    res.send("Well, have fun. I'm off to stick my head in the oven.")
})

app.get("/roz", (req, res) => {
    res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!")
})

app.get("/martin", (req, res) => {
    res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.")
})

app.get("/scrappy", (req, res) => {
    res.send("woof")
})