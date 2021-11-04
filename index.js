const express = require('express')
const app = express()

app.get('/frasier', (req, res) => {
    res.send('Once in prep school, the Existentialist Club once named me \'Most Likely to Be\'')
})

app.listen(3000, () => {
    console.log('Hello, Seattle. I\'m listening...')
})