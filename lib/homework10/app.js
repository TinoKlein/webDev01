let express = require('express');
let handlebars = require('express-handlebars');
let bodyParser = require('body-parser');
const data = require('./data');

let app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);


// CONTROLLERS
let viewController = require('./controller/view.controller');
let addController = require('./controller/add.controller');
let listController = require('./controller/list.controller');
let postController = require('./controller/post.controller');



// SETUP
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => { res.redirect('/list')});
app.get('/list', listController);
app.get('/view/:id', viewController);
app.get('/add', addController);
app.post('/post', postController);
app.post('/list', listController);
app.get('/artikelJson', function (req, res) {
    res.json(data);
});



app.listen(app.get('port'), function() { console.log('Running on localhost:' + app.get('port') + "."); });


// ERROR HANDLING
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
});
