const express = require('express');
const mysql   = require('mysql');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'steffi13',
    database : 'craigslist'
});

connection.connect();

app.get("/", (req, res) => {
    connection.query(`SELECT a.*, b.name FROM entries a LEFT JOIN categories b ON b.id = a.category`, (error, result) => {
        if(error) throw error;
        res.render('entries', {
            "entries": result
        });
    })
})

app.get("/categories", (req, res) => {
    connection.query(`SELECT * FROM categories`, (error, result) => {
        if(error) throw error;
        res.render('categories', {
            "categories": result
        });
    })
})

app.get("/categories/:category_name/entries", (req, res) => {
    let category_name = req.params['category_name'];console.log(category_name);
    connection.query(`SELECT a.*, b.name FROM entries a LEFT JOIN categories b ON b.id = a.category WHERE category = (SELECT id FROM categories WHERE name = '${category_name}')`, (error, result) => {
        if(error) throw error;
        res.render('category_entries', {
            "entries": result
        });
    })
});

app.get("/entries", (req, res) => {
    connection.query(`SELECT a.*, b.name FROM entries a LEFT JOIN categories b ON b.id = a.category`, (error, result) => {
        if(error) throw error;
        res.render('entries', {
            "entries": result
        });
    })
})

app.get("/entries/:id", (req, res) => {
    let entryID = req.params['id'];
    connection.query(`SELECT a.*, b.name FROM entries a LEFT JOIN categories b ON b.id = a.category WHERE a.id = ${entryID}`, (error, result) => {
        if(error) throw error;
        res.render('entryDetail', {
            "entry": result
        });
    })
});

app.delete("/entries/:id", (req, res) => {
    let entryID = req.params['id'];
    connection.query(`DELETE FROM entries WHERE id = ${entryID}`, (error, result) => {
        if (error) throw error;
        res.render('deleteEntry', {
            "id": entryID
        });
    });
});

app.get("/add", (req, res) => {
    connection.query(`SELECT * FROM categories`, (error, result) => {
        if(error) throw error;
        res.render('addEntry', {
            "catOptions": result
        });
    })
});

app.post("/entries", (req, res) => {
    let price;
    if(req.body.Price.includes(',')) price = req.body.Price.replace(',', '.'); else price = req.body.Price;


    connection.query(`INSERT INTO entries SET title = '${req.body.title}', Description = '${req.body.Description}', Price = '${price}', Email = '${req.body.Email}', category = '${req.body.category}'`, (error) => {
        if(error) throw error;
        res.writeHead(302, {'Location': '/entries'});
        res.end();
    })
});



app.listen(app.get('port'), function() { console.log('Running on localhost:' + app.get('port') + "."); });