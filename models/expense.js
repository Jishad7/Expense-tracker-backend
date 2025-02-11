const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Expense = sequelize.define('Expense', {
    amount : {
        type : DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    category : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT,
        allowNull : true
    },
    date : {
        type : DataTypes.DATEONLY,
        allowNull : false
    }
},{
    timestamps : true
}
);
Expense.sync();

module.exports = Expense;