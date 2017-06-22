const router = require('express').Router();
const studentRoutes = require('./students');
const teacherRoutes = require('./teachers');

router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);

module.exports = router;