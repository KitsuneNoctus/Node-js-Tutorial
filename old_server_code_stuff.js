// import http from 'http';
import express from 'express';

//Express is just a wrapper around the built in http network
const server = express();

server.listen(3000);

server.get('/', (req, requested) => {
    //from acmu... has an import fnction that acts like require
    import(); //Promise
    res.send({message:'Hello Express'});
});

server.get('/favicon.*', (req, requested) => {
    res.sendFile('./favicon....');
});


// const server = http.createServer()

// //  events

// //To do things ...
// //Look at docs https://nodejs.org/docs/latest/api/http.html -> search for request
// //Invoked or every request
// //Server is an event emitter
// server.on('request', (req, res) => {
//     //req.url will show whats being requested
//     console.log('Request!!!', req.url);
//     if (req.url == '/favicon.ico'){
//         res.write('');
//     } else {
//         res.write('Hello HTTP');
//     }
//     res.end();
// });

// //Its just listeneing, does nothing for now
// server.listen(3000);
