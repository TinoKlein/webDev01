const connection = require('../exports/dbConnection');

let propertiesController = (req, res) => {

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
            GROUP BY a.id 
            ORDER BY a.id DESC`, (error, result) => {
        if (error) throw error;
        properties = result;
        connection.query(`SELECT * FROM floors`, (error, result) => {
            if (error) throw error;
            floorSelect = result;
            res.render('properties', {
                "title": "Overview",
                "properties": properties,
                "floorSelect": floorSelect
            });
        });

    });
}

module.exports = propertiesController;
