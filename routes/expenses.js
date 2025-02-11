const express = require('express');
const Expense = require('../models/expense');
const router = express.Router();
const {Sequelize} = require('sequelize');

router.post('/', async(req,res)=>{
    try{
        const {amount,category,description,date} = req.body;
    const newExpense = await Expense.create({amount,category,description,date});
    res.status(201).json(newExpense);
    
    }
    catch(err){
        res.status(401).json({error : err.message});
    }   
});

router.get('/',async(req,res)=>{
    try{
        const {date} = req.query;
        const whereClause = date ? {date} : {};    
        const expenses = await Expense.findAll({where:whereClause});
        res.status(200).json(expenses);
    }
    catch(err)
    {
        res.status(400).json({error:err.messsage});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const expense = await Expense.destroy({where : { id : req.params.id}});
        if(expense)
            res.status(204).send();
        else
            res.status(404).json({error : 'expense not found'});
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    }
});

router.get('/stats', async (req, res) => {
    try {
        const { date } = req.query;

        // Define the where clause for filtering by date
        const whereClause = date ? { date } : {};

        const stats = await Expense.findAll({
            attributes: [
                'category',
                [Sequelize.fn('SUM', Sequelize.col('amount')), 'totalAmount']
            ],
            where: whereClause, // Apply date filter if provided
            group: ['category']
        });

        console.log("Database Stats:", stats);  //

        // Convert data into the format required for the chart
        const categories = stats.map(stat => stat.category);
        const amounts = stats.map(stat => Number(stat.dataValues.totalAmount) || 0);

        res.json({ categories, amounts });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;