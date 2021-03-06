// =============================Part 1===========================
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

//=====================Part 2========
// process.stdin.resume();

// console.log('Hello There')


//============================Part 3===================
// child_process
// https://nodejs.org/docs/latest/api/child_process.html#child_process_child_process_exec_command_options_callback
import { exec } from 'child_process';

import utils from 'util';
//Error first call back pattern
// exec('ls /', (err, stdout, stderr) => {
//     //Makes it pop up to user
//     if (err){
//         process.exit(1);
//         //can even have if statements for specific errors
//         // if (err === )
//     }
//     console.log(stdout);
// });

//Better way? More control
//Promise based api
const execP = utils.promisify(exec);

const main = async () => {
    try {
        const { stdout, stderr }  = await execP('ls /');

        console.log(stdout);
    } catch (error) {
        process.exit(1);
    }
}

main();


// ===================== Part 4 ==================
// EM

import EventEmitter from 'events';

const evenEmitter = new EventEmitter()

evenEmitter.on('change', () => {
    console.log('Something has changed');
});

setInterval(() => {
    evenEmitter.emit('change');
}, 1000);

//===============Part 5 / go over some stuff ============
// streams

/* Streams are an array of data over time,
so that way you program doesn eat a whole file 
in one go, especially when large.
It does it chuncks at a time. */

//zip, crypto, etc.

// Most interesting is transform stream
//read, write, transform

//[1,2,3,4]

//===================Some notes========
// scaling

//cluster/pm2
//Take a look at the above for running Node application in production
//Its wrapper around cluster module

//html/express
