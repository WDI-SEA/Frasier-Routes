# Frasier Routes

### Make sure you shut down your previous app

1. be sure to have `control c` your previous app if you were running one before starting this new activity

### Basic Express App

1. Initialize node in this directory (`npm init -y`)
2. install `express`
5. create an entry point (`index.js`) file
6. inside `index.js`, require express and save it to a variable named `express`
7. create a variable named app, and set it equal to `express()`
8. have app listen on port 3000
   * once it's listening, log "Hello, Seattle.  I'm listening..."
9. test it by going to [http://localhost:3000](http://localhost:3000)

### Routes

1. create a GET route for `/frasier`
   * it should send a response of "Once in prep school, the Existentialist Club once named me 'Most Likely to Be'"
2. test the `/frasier` route by going to [http://localhost:3000/frasier](http://localhost:3000/frasier)
3. create a GET route for `/niles`
   * it should send a response of "You know, sometimes I wonder if I'm not just in psychiatry for the money"
4. test the /niles route by going to [http://localhost:3000/niles](http://localhost:3000/niles)
5. create a GET route for `/daphne`
   * it should send a response of "Well, have fun.  I'm off to stick my head in the oven."
6. test the `/daphne` route by going to [http://localhost:3000/daphne](http://localhost:3000/daphne)
7. create a GET route for `/roz`
   * it should send a response of "Let me make it easy for you.  Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!"
8. test the `/roz` route by going to [http://localhost:3000/roz](http://localhost:3000/roz)
9. create a GET route for `/martin`
   * it should send a response of "You may think it's tough being middle-aged, but think about me.  I got a son who's middle-aged."
10. test the `/martin` route by going to [http://localhost:3000/martin](http://localhost:3000/martin)

Are URLs case sensitive? Let's test: 

1. create a GET route for `/Scrappy`
* it should send a response of "woof"
  1. test the `/Scrappy` route by going to...
* [http://localhost:3000/scrappy](http://localhost:3000/scrappy) - what happened? Says woof
* [http://localhost:3000/Scrappy](http://localhost:3000/Scrappy) - what happened? Still says woof

## Hungry For More

The topic is yours. Try to do it all from memory (in a new directory - you wont have to turn this part in!)

1. Create a basic app with multiple routes
2. When it comes time to do res.send, instead of just text, send html
3. To get res.send to work with line breaks in the html, change single/double quotes to backticks

   ```javascript
    res.send(`
        <html>
            <body>
                <h1>Oh ha!</h1>
            </body>
        </html>
    `);
   ```


_This deliverable was adapted from_ [_SEI-MAE_](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-MAE-INSTRUCTORS/blob/master/unit_2/w09d1/student_labs/morning.md)

