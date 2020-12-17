// http

let http = require('http');
let events = require('events');

let eventEmitter = new events.EventEmitter();

// creating server
let server = http.createServer((req, res) => {
    // Event trigger
    eventEmitter.emit('user requests', 'TEST');
    // get message in browser
    res.end('Node works fine !!!');
});

// event listener
eventEmitter.on('user requests', (data) => {
    console.log('A request has been done on the server ,' , data);
})

server.listen(3000, 'localhost', () => {
    console.log('Listening to port 3000');
});