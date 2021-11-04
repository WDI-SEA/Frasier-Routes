// import the express package
const express = require('express')

// instance of an express app
const app = express()

// tell the app to listen for requests on port 3000
app.listen(3000, ()=>{
    console.log('Hello, Seattle. I\'m listening...')
})

// create a GET route for /frasier
app.get('/frasier', (req, res)=>{
    res.sendFile(__dirname+`/views/frasier.html`)
})
// create a GET route for /niles
app.get('/niles', (req, res)=>{
    res.sendFile(__dirname+`/views/niles.html`)
})

// create a GET route for /daphne
app.get('/daphne', (req, res)=>{
    res.sendFile(__dirname+`/views/daphne.html`)
})

// create a GET route for /roz
app.get('/roz', (req, res)=>{
    res.sendFile(__dirname+`/views/roz.html`)
})

// create a GET route for /martin
app.get('/roz', (req, res)=>{
    res.sendFile(__dirname+`/views/roz.html`)
})

// create a GET route for /martin
app.get('/martin', (req, res)=>{
    res.sendFile(__dirname+`/views/martin.html`)
})

// create a GET route for /Scrappy
// url patterns are not case sensitive.
app.get('/Scrappy', (req, res)=>{
    res.sendFile(__dirname+`/views/Scrappy.html`)
})
