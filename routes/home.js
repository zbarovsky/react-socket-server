const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('all good in the hood')
})

module.exports = router