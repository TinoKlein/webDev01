let addController = function(req, res) {
    res.render('add', {
    title: 'Add Article'
  });
};

module.exports = addController;