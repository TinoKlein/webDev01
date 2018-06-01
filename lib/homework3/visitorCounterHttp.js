const http = require('http');
const fs = require('fs');

const port = 3000;
let count;

fs.readFile('counts.txt', 'utf8', (err,data) => {
    if (err) {
        return console.log(err);
    }

    count = data;

});

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

// if request method = GET
    if(req.method == 'GET'){

        // if(endpoint == /)
        if(req.url == "/"){
            res.end(String(count));

            // if(endpoint == /visit)
        }else if(req.url == "/visit") {
            count++;
            writeCount(count);
            res.end(String(count));

            // if(endpoint == /set)
        }else if(req.url === "/set"){
            // insert form
            const html = '<DOCTYPE html><html><body><form style="margin 0 auto" method="post" action="http://localhost:'+port+'">Counts: <input type="text" name="name" /><input type="submit" value="setzen" /></form></body>';
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        }else if(req.url === "/reset"){
            count = 0;
            writeCount(count);
            res.end(String(count));
        }

        // if(request method == POST)
    }else if(req.method == 'POST'){

        // read POST Data and write it to the count variable and to file
        req.on('data', (data) => {
           countTmp = String(data).split('=');
           count = countTmp[1]
           writeCount(count);
           res.end(String(countTmp[1]));

        });
    }

}).listen(port);

console.log('Server running at http://localhost:'+port);


function writeCount(count){
    fs.writeFile("counts.txt", count, (err) => {
        if(err) {
            return console.log(err);
        }
    });
}





