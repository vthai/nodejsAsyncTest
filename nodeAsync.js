var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var path = req.url;
    var param = url.parse(path, true);
    //console.log(param);
    var time = param['query']['task'];
    //console.log(param['query'], param['query']['task']);
    console.log('Serving ' + path + ' START', time);

    fs.readFile('test.txt', function(err, data) {
        console.log('Serving ' + path + ' \tEXE START');
        var sum = 0;
        for (i = 0; i < time; i++) {
            sum = sum + i;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World ' + path + '->' + sum);
        console.log('Serving ' + path + ' \tEXE END');
    });
    
    console.log('Serving ' + path + ' END');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');