const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({response: "I'm alive dawg"}).status(200)
})

module.exports = router