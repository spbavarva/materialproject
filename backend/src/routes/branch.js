const express = require('express')
const router = express.Router()
const {createBranch,getAllBranchesOfCollege,getBranchById} = require('../controller/branch')
const { uploadS3 } = require('../common-middleware')

router.post('/branch/create', uploadS3.array('pictures'), createBranch)
router.get('/college/:id/branches', getAllBranchesOfCollege)
router.get('/branch/:id', getBranchById)


module.exports = router