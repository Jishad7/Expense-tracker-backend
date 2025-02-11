const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Ensures SSL is used
      rejectUnauthorized: false, // Disables certificate validation (use with caution)
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL!'))
  .catch((err) => console.log('Unable to connect to database:', err));

module.exports = sequelize;
