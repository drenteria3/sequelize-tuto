const router = require('express').Router();

const apiUsersRouter = require('./api/usuarios');
const apiRegisterRouter = require('./api/register');

router.use('/usuarios', apiUsersRouter);
router.use('/register', apiRegisterRouter);

module.exports = router;