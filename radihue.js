var http = require('http');
var url  = require('url');
var exec = require('child_process').exec;
var i = 0;
var j = 1;
var command = "";

http.createServer(function (req, res) {
	var parts = url.parse(req.url,true);
    var type = parts.query.type;
    switch(type) {
    	case 'hee': //orange
    		command = "./hue.sh "+j+" 255 255 10000"
	    	exec(command, function(err, stdout, stderr) {});
	    	console.log(j+",hee");
    		break;
    	case 'great': //red
	    	command = "./hue.sh "+j+" 255 255 65535"
	    	exec(command, function(err, stdout, stderr) {});
	    	console.log(j+",great");
    		break;
    	case 'www': //green
 	    	command = "./hue.sh "+j+" 255 255 25500"
 		   	exec(command, function(err, stdout, stderr) {});
	    	console.log(j+",www");
    		break;
    	case 'question': //blue
    		command = "./hue.sh "+j+" 255 255 47000"
 		   	exec(command, function(err, stdout, stderr) {});
	    	console.log(j+",question");
    		break;
    	default:
    		break;
    }
    i++;
    if(i>2) {
    	i=0;
    }
    j = i+1
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end('<h1>OK</h1>');
}).listen(1337, "192.168.0.3");