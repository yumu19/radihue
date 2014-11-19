var http = require('http');
var url  = require('url');
var exec = require('child_process').exec;

http.createServer(function (req, res) {
	var parts = url.parse(req.url,true);
    var type = parts.query.type;
    switch(type) {
    	case 'hee':
    		break;
    	case 'great':
	    	exec('pwd -P', function(err, stdout, stderr) {});
	    	console.log("great");
    		break;
    	case 'www':
    		break;
    	default:
    		break;
    }
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>OK</h1>');
}).listen(1337, "localhost");