const express = require('express');
const http = require('http');
const fs = require('fs');
// creating the server using express
const app = express();
const server = http.createServer(app);

// get endpoint
app.get('/', (req, res) => {
    res.send('<h1>API works fine ...</h1>'); // res.end() also can be used
});

app.get('/data', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if(!err) res.json(data.toString())
    });
})



server.listen(3000, () => console.log('App Listening to 3000'));