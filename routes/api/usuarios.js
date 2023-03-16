const router = require('express').Router();

const {Usuario} = require('../../db');

// Get all users
router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});


//create a new user
router.post('/', async (req, res) => {
    const usuarios = await Usuario.create(req.body);
    res.json(usuarios);
});


//Update a user
router.put('/:id', async (req, res) => {
    await Usuario.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha actualizado el usuario' });
});

//Delete a user
router.delete('/:id', async (req, res) => {
    await Usuario.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha eliminado el usuario' });
});



module.exports = router;