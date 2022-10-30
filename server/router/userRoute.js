const express= require("express");
const { getUser, signUp, login } = require("../controllers/userContoller");
const router = express.Router();

router.get('/user',getUser)
router.post('/user/signup',signUp)
router.post('/user/login',login)



module.exports = router;
