var static = require('node-static');

var file = new static.Server('./www'),
    port = 80;

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    // Serve files!
    file.serve(request, response);
  }).resume();
}).listen(port);

console.log('static server launched on '+port)