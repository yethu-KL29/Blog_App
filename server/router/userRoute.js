const express= require("express");
const { getUser, signUp, login } = require("../controllers/userContoller");
const router = express.Router();

router.get('/',getUser)
router.post('/',signUp)
router.post('/login',login)



module.exports = router;
