
http = require('http');
os = require('os');
fs = require('fs');

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain

    console.log(os.freemem());
    
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    if(request.url == '/'){
        filename = 'pages/index.html'
        // Send the response body as "Hello World"
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            console.log('OK: ' + filename);
            console.log(data);
            response.end(data);

          });
    }else if(request.url == '/about'){
        // Send the response body as "Hello World"
        filename = 'pages/about.html'
        // Send the response body as "Hello World"
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            console.log('OK: ' + filename);
            console.log(data);
            response.end(data);

          });
    }else if(request.url == '/vision'){
        // Send the response body as "Hello World"
        filename = 'pages/vision.html'
        // Send the response body as "Hello World"
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            console.log('OK: ' + filename);
            console.log(data);
            response.end(data);

          });
    }
    else if(request.url == '/mission'){
        // Send the response body as "Hello World"
        filename = 'pages/mission.html'
        // Send the response body as "Hello World"
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            console.log('OK: ' + filename);
            console.log(data);
            response.end(data);

          });
    }
    else{
        response.end('Not Found\n'); 
    }
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');