const express = require('express');
const router = express.Router();
const user  =  require("../controllers/user")

router.post('/',user.createUser)
router.post('/updatescore',user.updateScore)

module.exports = router