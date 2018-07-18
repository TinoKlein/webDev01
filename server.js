const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const connection = require('./exports/dbConnection');


passport.use(new LocalStrategy(
    function(username, password, done) {
        connection.query(`SELECT id FROM login WHERE username = '${username}' AND password = '${password}'`, (error, result) => {
            if (error) throw error;
            numRows = result.length;
            if(numRows != 0){
                return done(null, {name: username});
            }else{
                return done(null, false);
            }

        })
    }
));
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());

app.engine('handlebars', handlebars({
    defaultLayout: 'layout',
    helpers: require('./assets/js/handlebarHelpers.js')
}));

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static('assets'));

const mainController = require('./controller/mainController');
const addHouseController = require('./controller/add/addHouseController');
const addFloorController = require('./controller/add/addFloorController');
const addRoomController = require('./controller/add/addRoomController');
const propertyController = require('./controller/propertyController');
const propertiesController = require('./controller/propertiesController');
const updateController = require('./controller/updateController');

app.get("/", mainController);
app.get("/properties", propertiesController);
app.get("/property/:houseID/:floorID", propertyController);
app.get("/property/:houseID/:floorID/:room", propertyController);

app.post('/login',
    passport.authenticate('local', { successRedirect: '/properties',
        failureRedirect: '/',
        failureFlash: true })
);

app.post("/property/update", updateController);
app.post("/addHouse", addHouseController);
app.post("/property/addRoom", addRoomController);
app.post("/property/addFloor", addFloorController);

app.listen(app.get('port'), function() { console.log('Running on localhost:' + app.get('port') + "."); });