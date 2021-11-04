const express = require("express")
const app = express()
app.listen(3000)
//test port
//console.log("Hello, Seattle. I'm listening...")

//home
app.get("/", (req, res)=>{
    res.sendFile(__dirname+`/views/index.html`)
 })
//frasier
app.get("/frasier", (req, res)=>{
   //res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'")
    res.sendFile(__dirname+`/views/frasier.html`)
})
//niles
app.get("/niles", (req, res)=>{
    //res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")
    res.sendFile(__dirname+`/views/niles.html`)
})

 //daphne
 app.get("/daphne", (req, res)=>{
    //res.send("Well, have fun. I'm off to stick my head in the oven.")
    res.sendFile(__dirname+`/views/daphne.html`)
})

 //roz
 app.get("/roz", (req, res)=>{
    //res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!")
    res.sendFile(__dirname+`/views/roz.html`)
})

 //martin 
 app.get("/martin", (req, res)=>{
    //res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.")
    res.sendFile(__dirname+`/views/martin.html`)
})

 //scrappy
 app.get("/scrappy", (req, res)=>{
    //url patterns are NOT case sensitive
    //res.send("woof")
    res.sendFile(__dirname+`/views/scrappy.html`)
 })