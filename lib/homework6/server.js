const express = require('express');
const app = express();

const sitecontroller = require("./controller/siteController.js");
const eintragcontroller = require("./controller/eintragController.js");


app.get('/eintragen.html', (req, res) => {
    res.end(sitecontroller.siteController('eintragen'));
});

app.get('/eintragen.js*', (req, res) => {
    const query = req.query;
    const erg = eintragcontroller.eintragController(query);

    if(erg == true) res.redirect("/");

});

app.get('*', (req, res) => {
    // if(req.url == "/") res.redirect("/");
    const url = req.url;
    res.end(sitecontroller.siteController(url));
});


app.listen(3000, () => console.log("Server on Port 3000"));