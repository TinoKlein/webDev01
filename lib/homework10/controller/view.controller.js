let articles = require('../data');

let viewController = function(req, res) {

  let id = req.params.id;

  if( id <= (articles.length - 1) ) {
    res.render('view', {
      title: 'View Article',
      article: articles[id]
    });
  } else {
    res.status(404);
    res.render('404');
  }

};

module.exports = viewController;