const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {Registro} = require('../../db');



router.post('/registrar', async (req, res) => {
    const registro = await Registro.create(req.body);
    res.json(registro);

});

// router.get('/', async (req, res) => {
//     const usuarios = await Usuario.findAll();
//     res.json(usuarios);
// });

module.exports = router;