import http from 'http';

const server = http.createServer()

//  events

//To do things ...
//Look at docs https://nodejs.org/docs/latest/api/http.html -> search for request
//Invoked or every request
//Server is an event emitter
server.on('request', (req, res) => {
    //req.url will show whats being requested
    console.log('Request!!!', req.url);
    if (req.url == '/favicon.ico'){
        res.write('');
    } else {
        res.write('Hello HTTP');
    }
    res.end();
});

//Its just listeneing, does nothing for now
server.listen(3000);
