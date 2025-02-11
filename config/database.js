const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('myexpense','postgres','jishad@7107',{
    host:'localhost',
    dialect:'postgres'
});

sequelize.authenticate()
    .then(()=>console.log('Connected to postgresql!'))
    .catch((err)=>console.log('Unable to connect to database',err));

    module.exports = sequelize;
