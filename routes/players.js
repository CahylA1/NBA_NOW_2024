const express = require('express')
const router = express.Router()
const playerCtrl = require('../controllers/players')


// router.get('/', playerCtrl.index)
router.post('/search', playerCtrl.index);

module.exports = router