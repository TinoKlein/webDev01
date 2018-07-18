const connection = require('../exports/dbConnection');

let mainController = (req, res) => {
    res.render('main', {
        "title": "property manager"
    });
}

module.exports = mainController;
