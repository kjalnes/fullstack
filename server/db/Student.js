const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  firstname: Sequelize.string,
  lastname: Sequelize.string,
  dob: Sequelize.date
};

const Student = conn.define('student',attrs);

module.exports = Student;