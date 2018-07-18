const connection = require('../exports/dbConnection');

let propertyController = (req, res) => {

    const houseID= req.params.houseID;
    const floorID = req.params.floorID;
    const room = req.params.room;
    let floorSelect;

    connection.query(`
        SELECT * 
        FROM houses
        WHERE id = ${houseID}`, (error, result) => {
        if (error) throw error;
        house = result;

    });

    connection.query(`
        SELECT 
            a.*,
            b.houseID,
            b.floorID,
            COUNT(DISTINCT b.floor) as countFloors,
            COUNT(b.room) as countRooms,
            SUM(b.doors) as countDoors, 
            SUM(b.windows) as countWindows, 
            SUM(b.sm) as countSM
            FROM houses a
            RIGHT JOIN prop b ON b.houseID = a.id
            WHERE houseID = ${houseID}
            GROUP BY a.id 
            ORDER BY a.id DESC`, (error, result) => {
        if (error) throw error;
        overview = result;
    });

    connection.query(`SELECT * FROM floors WHERE id NOT IN(SELECT floorID FROM prop WHERE houseID = ${houseID})`, (error, result) => {
        if (error) throw error;
        floorSelect = result;
    });

    connection.query(`
        SELECT DISTINCT a.floor, a.floorID, a.houseID, b.floorID as floorIDext
        FROM prop a
        LEFT JOIN prop b ON b.floorID = ${floorID}
        WHERE a.houseID = ${houseID}
        ORDER BY a.floorID`, (error, result) => {
        if (error) throw error;
        floors = result;

        connection.query(`
        SELECT *
        FROM prop
        WHERE houseID = ${houseID} AND floorID = ${floorID}
        ORDER BY id`, (error, result) => {
            if (error) throw error;
            property = result
            res.render('property', {
                "title": "house detail",
                "house": house,
                "property": property,
                "floors": floors,
                "houseID": houseID,
                "floorID": floorID,
                "floorSelect": floorSelect,
                "room": room,
                "overview": overview
            });

        });
    });
};

module.exports = propertyController;
