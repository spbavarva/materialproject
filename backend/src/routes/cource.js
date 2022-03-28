const express = require('express')
const router = express.Router()
const {createCource,getAllCourcesOfSemester,getCourceById} = require('../controller/cource')
const { uploadS3 } = require('../common-middleware')

router.post('/cource/create', uploadS3.array('pictures'), createCource)
router.get('/semester/:id/cources', getAllCourcesOfSemester)
router.get('/cource/:id', getCourceById)


module.exports = router