let faker = require('faker');
let moment = require('moment');

let articles = [...Array(5)].map((val, i) => {
  return {
    id: i + 1,
    title: faker.lorem.sentence(3,0),
    teaser: faker.lorem.sentences(1),
    text: faker.lorem.paragraph(5),
    author: faker.name.findName(),
    release: moment(faker.date.past(1), moment.ISO_8601).format('D.M.YYYY')
  }
});

module.exports = articles;