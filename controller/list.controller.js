const data = require('../data');

let listController = function(req, res) {

  data.sort(function(a, b) {
    return new Date(b.release) - new Date(a.release);
  });

  if (req.query.search) {

    let filteredData = data.filter( article => { return article.title.includes(req.query.search) });
    res.render('list', {
      title: 'List',
      isSearching: true,
      query: req.query.search,
      articles: filteredData
    });

  } else {

    res.render('list', {
      title: 'List',
      isSearching: false,
      articles: data
    });

  }

};

module.exports = listController;