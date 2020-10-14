const express = require('express');
const router = express.Router();

const { signup, signin, signout, requireSignin } = require('../controllers/auth');
const { userSignupvalidator } = require('../validator');

router.post('/signup', userSignupvalidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

router.get('/hello', requireSignin, (req, res) => {
  res.send('Hello I am here');
})

// router.get('/', (req, res) => {
//   res.send('hello from node');
// });

module.exports = router;