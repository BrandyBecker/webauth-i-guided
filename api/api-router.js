const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req,res)=>{
  //read a password from the body, hash the password,
  //then return to user in a obj that looks like 
  // {password: 'original password', hash: 'hashed password'}
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 14);
  res.json({password: req.body.password, hash: hash})
})

module.exports = router;
