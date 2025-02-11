const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: {
      rejectUnauthorized: false, // Required for Render to work with PostgreSQL
    },
  });

sequelize.authenticate()
    .then(()=>console.log('Connected to postgresql!'))
    .catch((err)=>console.log('Unable to connect to database',err));

    module.exports = sequelize;
