const prependFile = require('prepend-file');

module.exports.eintragController = (querys) => {

    const timestamp = new Date().toLocaleString("de-DE");

    const newTitle = querys.title.replace(" ", "_");

    let artikel = art = {
        title: querys.title,
        teaser: querys.teaser,
        artikeltext: querys.text,
        autor: querys.autor,
        timestamp: timestamp
    };

    artikel = JSON.stringify(artikel);

    const save = "module.exports."+newTitle+"="+artikel+"\r\n";

    prependFile('./data/data.js', save, function (err) {
        if (err) throw err;
    });

    return true;

};