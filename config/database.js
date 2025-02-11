const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('mypgdb_g9wz','mypgdb_g9wz_user','0zpkoQeAoYWqPELzyJIvOCOqUF3D7aAD',{
    host:'dpg-culf9n5svqrc73ccu410-a',
    dialect:'postgres'
});

sequelize.authenticate()
    .then(()=>console.log('Connected to postgresql!'))
    .catch((err)=>console.log('Unable to connect to database',err));

    module.exports = sequelize;
