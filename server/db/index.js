const conn = require('./conn');
const Students = require('./Student');
const Teachers = require('./Teacher');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Students,
    Teachers
  }
};