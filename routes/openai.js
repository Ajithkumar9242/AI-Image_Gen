const express = require("express")
const router = express.Router()
const { generateimg } = require('../controllers/openaiCont')

router.post('/generateimage', generateimg)

module.exports = router

