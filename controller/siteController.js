const Mustache = require('mustache');
const fs = require('fs');

module.exports.siteController = (url) => {

    let file, daten, rendered;

    if (url == 'eintragen') {
        file = url;
        daten = file;
    } else {
        if (url.includes(".")) {
            if (url != "/") {
                url = url.replace("/", "");
                url = url.split(".");
                daten = url[0];
                file = "artikel";
            }
        } else {
            daten = "artikelliste";
            file = daten;
        }
    }

    const head = fs.readFileSync("./view/head.html").toString();
    content = fs.readFileSync(`./view/${file}.html`).toString();
    const footer = fs.readFileSync("./view/footer.html").toString();

    template = head + content + footer;

    if (file == 'artikelliste'){

        let view = '{"artikel":[';
        let datas = Object.keys(require("../data/data.js"));
        let i = 0;
        for(data in datas){
            if(i == datas.length-1) {
                view += '{"name":"' + datas[data].replace("_", " ") + '", "realName":"' + datas[data] + '"}';
            }else{
                view += '{"name":"' + datas[data].replace("_", " ") + '", "realName":"' + datas[data] + '"},';
            }
            i++;
        }
        view += ']}';

        rendered = Mustache.render(template, JSON.parse(view));

    }else if(url == 'eintragen'){
        view = {title:"Artikel eintragen"};
        rendered = Mustache.render(template, view);
    }else {
        const view = require("../data/data.js");
        rendered = Mustache.render(template, view[daten]);
    }

    return rendered;

};