const express = require('express');
const http = require('http');

// creating the server using express
const app = express();
const server = http.createServer(app);

// get endpoint
app.get('/', (req, res) => {
    res.send('<h1>API works fine</h1>');
});



server.listen(3000, () => console.log('App Listening to 3000'));