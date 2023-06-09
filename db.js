const Sequelize = require('sequelize');

const usuariosmodel = require('./models/usuarios');
const registermodel = require('./models/register');

const sequelize = new Sequelize('sequelize-tuto', 'user_name', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Usuario = usuariosmodel(sequelize, Sequelize);
const Registro = registermodel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
        
    });

module.exports = { Usuario, Registro };
