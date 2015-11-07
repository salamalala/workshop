var static = require('node-static');
var fileServer = new static.Server('./public');

function serveStaticFiles(request, response) {
    fileServer.serve(request, response);
}

function writePosts(request, response) {
  //if
  fs.writeFile("./blog.json", JSON.stringify({ a: "hallo"}, null, '\t'), function (err) {
      if (err) {
          return err;
      }
  });

}

function 


module.exports = {
  serveStaticFiles: serveStaticFiles
};