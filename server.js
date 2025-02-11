const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenses');

const app = express();

app.use(cors({
    origin: 'https://expense-tracker-three-plum.vercel.app' // Allow your Vercel frontend
}));app.use(bodyParser.json());
app.use('/expenses',expenseRoutes);

app.listen(5000,()=>{
    console.log("Server running on port https://expense-tracker-three-plum.vercel.app");
});