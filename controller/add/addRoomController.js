const connection = require('../../exports/dbConnection');

const addRoomController = (req, res) => {

    const houseID = req.body.houseID;
    const floorID = req.body.floorID;
    const roomName = req.body.roomName;

    connection.query(
        `SELECT room FROM prop WHERE houseID = ${houseID} AND floorID = ${floorID} AND room IS NULL`, (error, result) => {
            if (error) throw error;

            numRows = result.length;

            if(numRows == 0){
                connection.query(`INSERT INTO prop SET houseID = ${houseID}, floorID = ${floorID}, floor = (SELECT floor FROM floors WHERE id = ${floorID}), room = '${roomName}'`, (error) => {
                    if (error) throw error;
                    res.redirect(`/property/${houseID}/${floorID}/${roomName}`);
                })
            }else{
                connection.query(`UPDATE prop SET room = '${roomName}' WHERE houseID = ${houseID} AND floorID = ${floorID} AND room IS NULL`, (error) => {
                    if (error) throw error;
                    res.redirect(`/property/${houseID}/${floorID}/${roomName}`);
                })
            }


        });
}

module.exports = addRoomController;