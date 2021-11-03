const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('When you\'re here, you\'re home.')
})

//Frasier get route
app.get('/frasier', (req, res)=>{
    res.send('Once in prep school, the Existentialist Club once named me \'Most Likely to Be\'')
})
//Niles get route
app.get('/niles', (req, res)=>{
    res.send('You know, sometimes I wonder if I\'m not just in psychiatry for the money')
})
//Daphne
app.get('/daphne', (req, res)=>{
    res.send('Well, have fun. I\'m off to stick my head in the oven.')
})
//Roz
app.get('/roz', (req, res)=>{
    res.send('Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!')
})
//Martin
app.get('/martin', (req, res)=>{
    res.send('You may think it\'s tough being middle-aged, but think about me. I got a son who\'s middle-aged.')
})
//Scrappy case test
app.get('/Scrappy', (req, res)=>{
    res.send('woof')
})
app.listen(3000, ()=>{
    console.log('welcome to channel 3k')
})