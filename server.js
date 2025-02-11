const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenses');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/expenses',expenseRoutes);

app.listen(5000,()=>{
    console.log("Server running on port http://localhost:5000/");
});