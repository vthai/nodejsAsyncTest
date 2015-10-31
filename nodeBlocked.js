var http = require('http');

http.createServer(function (req, res) {
    var path = req.url;
    console.log('Serving ' + path + ' START');

    var sum = 0;
    for (i = 0; i < 500000000; i++) {
        sum = sum + i;
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World ' + sum);
    
    console.log('Serving ' + path + ' END');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');