const express = require('express')
const router = express.Router()
const {createSemester,getAllSemestersOfBranch,getSemesterById} = require('../controller/semester')
const { uploadS3 } = require('../common-middleware')

router.post('/semester/create', uploadS3.array('pictures'), createSemester)
router.get('/branch/:id/semesters', getAllSemestersOfBranch)
router.get('/semester/:id', getSemesterById)


module.exports = router