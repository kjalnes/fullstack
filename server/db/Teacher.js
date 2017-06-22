const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  firstname: Sequelize.string,
  lastname: Sequelize.string
};

const Teacher = conn.define('teacher',attrs);

module.exports = Teacher;