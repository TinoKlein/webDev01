const net = require('net');
const fs = require('fs');

const host = "127.0.0.1";
const port = "3000";
let count;

fs.readFile('counts.txt', 'utf8', (err,data) => {
    if (err) {
        return console.log(err);
    }

    count = data;

});

let getRegex = /(GET)|(POST)|([\/]?\S+)/gm;
let postRegex = /(inputCount=)([0-9]\d+)/gm;

var server = net.createServer(function(socket) {
    socket.on('data', (data) => {

        let match = (data.toString()).match(getRegex);

        const getPost = match[0];
        const queryString = match[1];

        if(getPost === "GET"){
            if(queryString === "/"){
                socket.end(String(count));
            }else if(queryString === "/visit"){
                count++;
                writeCount(count);
                socket.end(String(count));
            }else if(queryString === "/set") {
                const html = '<DOCTYPE html><html><body><form style="margin 0 auto" method="post" action="http://localhost:'+port+'">Counts: <input type="text" name="inputCount" /><input type="submit" value="setzen" /></form></body>';
                socket.write('HTTP/1.1 200 OK\r\n');
                socket.write('Content-Type: text/html; charset=utf-8\r\n')
                socket.write('\r\n');
                socket.end(html);
            }else if(queryString === "/reset"){
                count = 0;
                writeCount(count);
                socket.end(String(count));
            }
        }else if(getPost === "POST"){
            let matchPost = (data.toString()).match(postRegex);
            const postVar = String(matchPost).split("=");
            count = postVar[1];
            writeCount(count);
            socket.end(String(count));
        }
    });
}).listen(port, '127.0.0.1', function () {
    console.log(`Server running on http://localhost:${port}.`);
});

function writeCount(count){
    fs.writeFile("counts.txt", count, (err) => {
        if(err) {
            return console.log(err);
        }
    });
}