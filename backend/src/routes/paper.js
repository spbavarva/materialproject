const express = require('express')
const router = express.Router()
const {createPaper,getAllPapersBySemester,getAllPapersByCource,getPaperById} = require('../controller/paper')
const { uploadS3 } = require('../common-middleware')

router.post('/paper/create', uploadS3.array('pictures'), createPaper)
router.get('/semester/:id/papers', getAllPapersBySemester)
router.get('/cource/:id/papers', getAllPapersByCource)
router.get('/paper/:id', getPaperById)


module.exports = router