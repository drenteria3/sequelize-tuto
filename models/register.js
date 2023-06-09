module.exports = (sequelize, type) => {
    return sequelize.define('registrados', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        password: type.STRING(150)
    });
}