let articles = require('../data');
let date = new Date();

let postController = function(req, res) {

  let newArticle = {
    id: articles.length + 1,
    title: req.body.title,
    teaser: req.body.teaser,
    text: req.body.text,
    author: req.body.author,
    release: date.getDate()  + '.' + (date.getMonth() +1) + '.' + date.getFullYear()
  };

  articles.push(newArticle);
  res.redirect('/');

};

module.exports = postController;