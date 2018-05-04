const dns = require('dns');

let hostname = "spreemanns.de";

dns.resolveTxt(hostname, function(e,txt){
    console.log(txt);
});
