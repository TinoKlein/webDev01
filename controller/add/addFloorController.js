const connection = require('../../exports/dbConnection');

const addFloorController = (req, res) => {

    const floorID = req.body.floorName;
    const houseID = req.body.houseID;

    connection.query(`INSERT INTO prop SET floorID = ${floorID}, houseID = ${houseID}, floor = (SELECT floor FROM floors WHERE id = ${floorID})`, (error) => {
        if (error) throw error;
        res.redirect(`/property/${houseID}/${floorID}`);
    })
}

module.exports = addFloorController;