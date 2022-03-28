const express = require('express')
const router = express.Router()
const { createCollege,getAllColleges,getCollegeById} = require('../controller/college')
const { uploadS3 } = require('../common-middleware')

router.post('/college/create', uploadS3.array('pictures'), createCollege)
router.get('/colleges', getAllColleges)
router.get('/college/:id', getCollegeById)


module.exports = router