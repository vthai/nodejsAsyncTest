var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var path = req.url;
    var param = url.parse(path, true);
    var time = param['query']['task'];
    console.log('Serving ' + path + ' START', time);

    process.nextTick(function() {
        console.log('Serving NT ' + path + ' \tEXE START');
        var sum = 0;
        for (i = 0; i < time; i++) {
            sum = sum + i;
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World timeout ' + path + '->' + sum);

        console.log('Serving NT ' + path + ' \tEXE END');
    });
    
    console.log('Serving ' + path + ' END');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');