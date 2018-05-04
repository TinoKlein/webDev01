const net = require('net');

let bodyArray = [], leereZeile = false, lang, charset;const port = 3000;

const server = net.createServer((socket) => {

    socket.on('data', (data) => {
        let lines = data.toString().split('\r\n');
            lines.forEach((line) => {
                if(line.includes("Accept-Language")) {
                    werteTmp = line.split(":");
                    if (werteTmp[1].includes(",")) {
                        langTmp = werteTmp[1].split(",");
                        lang = langTmp[0];
                    } else {
                        lang = werteTmp[1];
                    }
                }else if(line.includes("charset")) {
                    charsetTmp = line.split('=');
                    charset = charsetTmp[1];
                }else if(line === ''){
                    leereZeile = true;
                }else if(leereZeile === true){
                    bodyArray = line.split("\n");
                }
            });

            if(typeof lang !== "undefined") console.log("Accept-Language: " + lang);
            if(typeof charset !== "undefined") console.log("charset: " + charset);

            const arraySorted = bubbleSort(bodyArray);

            socket.write('HTTP/1.1 200 OK\r\n');
            socket.write('Content-Type: text/plain; charset=utf-8\r\n')
            socket.write('\r\n');
            socket.write(arraySorted.join('\r\n'));
            socket.end();
    })
}).listen(port);


function bubbleSort(arry){
    for(let i = 0; i <= arry.length; i++){
        for(let j = 0 ; j < arry.length - i - 1; j++){
            if(arry[j].localeCompare(arry[j+1]) > -1){
                a = arry[j+1];
                b = arry[j];

                arry[j] = a;
                arry[j+1] = b;
            }
        }
    }

    return arry;
}