// Dependencies
var http = require("http");
var fs = require('fs');
var url = require('url');

var PORT = 8080;

// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

function onPost(req, res) {

  // Saving the request method as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server!");
    console.log("Your data was " + requestData);
  });

  // When the request has ended...
  req.on("end", function() {
    res.write("<html><head><title>Hello Noder!</title></head><body>");
    res.write("<h1>Thank You!</h1>");
    res.write("</body></html>");
    res.end();
  });

}

var server = http.createServer(function(req, res) {
  function readFileAndRespond(fileName) {
    fs.readFile(__dirname + fileName, function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // Capturing the url the request is made to.
  var urlLink = req.url;
  var urlParts = url.parse(req.url);
  var method = req.method.toLowerCase();

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case '/':
      if (method === 'get') {
        readFileAndRespond('/index.html');
      }
      else {
        display404(urlLink, req, res);
      }
    break;
    case '/band':
      if (method === 'post') {
        onPost(req, res);
      }
      else {
        display404(urlLink, req, res);
      }
    break;
    default:
      display404(urlLink, req, res);
    break;
  }
});

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);
});
