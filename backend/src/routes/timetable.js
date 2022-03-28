const express = require('express')
const router = express.Router()
const {createTimetable,getTimetableBySemester,getTimetableById} = require('../controller/timetable')
const { uploadS3 } = require('../common-middleware')

router.post('/timetable/create', uploadS3.array('pictures'), createTimetable)
router.get('/semester/:id/timetable', getTimetableBySemester)
router.get('/timetable/:id', getTimetableById)


module.exports = router