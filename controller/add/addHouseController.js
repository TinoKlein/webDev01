const connection = require('../../exports/dbConnection');

const addFloorController = (req, res) => {

    const street = req.body.street;
    const city = req.body.city;
    const zip = req.body.zip;
    const apartment = req.body.apartment;
    const floorID = req.body.floorID;
    const lastedit = Date.now() / 1000;
    let houseID;

    connection.query(`INSERT INTO houses SET street = '${street}', city = '${city}', zip = '${zip}', apartment = '${apartment}', lastedit = '${lastedit}'`, (error, result) => {
        if (error) throw error;
        houseID = result.insertId
        connection.query(`INSERT INTO prop SET houseID = '${houseID}', floorID = '${floorID}', floor = (SELECT floor FROM floors WHERE id = ${floorID})`, (error, result) => {
            if (error) throw error;
            res.redirect(`/properties`);
        })
    })
}

module.exports = addFloorController;