const http = require('http');
const fs = require('fs');
const path = require('path');

let htdocs, port;

const param = process.argv.slice(2);

if(param.length > 1){
    htdocs = param[0];
    port = param[1];
}else{
    htdocs = param.toString();
    port = 8000;
}

http.createServer(function (request, response) {

    let path2file = '.' + request.url;
    if (path2file == './')
        path2file = './' + htdocs + '/index.html';
    else
        path2file = './' + htdocs + request.url;

    let extname = String(path.extname(path2file)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg': 'image/jpg',
        '.png': 'image/png',
        '.js': 'application/javascript',
        '.js': 'text/javascript'

    };

    let contentType = mimeTypes[extname] || 'text/plain';

    fs.readFile(path2file, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./htdocs/404.html', function (error, content) {
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Ein Fehler ist aufgetreten. Bitte versuchen Sie es noch einmal\r\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    });

}).listen(port);
console.log('Server running at http://localhost:'+port);