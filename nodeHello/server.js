const http = require('http') // including a module
// check out node standard lib: https://nodejs.org/api/

const hostname = '127.0.0.1'
const port = 3000

// Whenever a new request is received, the request event is called, providing 
// two objects: a request (an http.IncomingMessage object) and a response (an 
// http.ServerResponse object).
// the second object (varname res) is used to return info to caller ofc
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n') // close the response, adding the content as an argument to end():
  console.log('Completed res')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// % node server.js



// For deeper js knowledge applicable to node, see:
//
// What is recommended to learn before diving deep with Node.js?
// Lexical Structure
// Expressions
// Data Types
// Classes
// Variables
// Functions
// this operator
// Arrow Functions
// Loops
// Scopes
// Arrays
// Template Literals
// Strict Mode
// ECMAScript 2015 (ES6) and beyond
//
// The following concepts are also key to understand asynchronous programming, 
// which is one of the fundamental parts of Node.js:
// Asynchronous programming and callbacks
// Timers
// Promises
// Async and Await
// Closures
// The Event Loop