const connection = require('../exports/dbConnection');

let updateController = (req, res) => {

  const houseID = req.body.houseID;
  const floorID = req.body.floorID;
  const id = req.body.id;
  const doors = req.body.doors;
  const windows = req.body.windows;
  const sm = req.body.sm;

  const lastedit = Date.now() / 1000;

   connection.query(
       `UPDATE prop SET doors=${doors}, windows=${windows}, sm=${sm} WHERE id = ${id}`, (error) => {
       if (error) throw error;
       connection.query(
           `UPDATE houses SET lastedit = ${lastedit} WHERE id = ${houseID}`, (error) => {
               if (error) throw error;
               res.redirect(`/property/${houseID}/${floorID}/`);
           });
   });



};

module.exports = updateController;