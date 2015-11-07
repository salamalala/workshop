/* *
 * Start by requiring in the http module,
 * and make your own server!
 */

// "use strict";

//write a server
//create two routes one for post one for get

var http = require('http');
var fs = require('fs');
var port = process.env.port || 8000;
var handlers = require('./handlers.js');

 
function handler(request, response) {

  if (request.url === "/posts") {
    handlers.writePosts(request, response);
  } else {
    handlers.serveStaticFiles(request, response);  
  }
  
}

http.createServer(handler).listen(port); 

console.log('node http server listening on http://localhost:' + port);

