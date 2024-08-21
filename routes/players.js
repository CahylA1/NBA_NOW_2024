const express = require('express')
const playersCtrl = require('../controllers/players')
const router = express.Router()

router.get('/', playersCtrl.index ) 

module.exports = router