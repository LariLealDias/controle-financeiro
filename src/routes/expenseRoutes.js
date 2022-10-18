import express from "express";
import expensesController from '../controllers/expensesController.js'

const router = express.Router();

    router 
    .post('/despesas', expensesController.registerExpense)
    .get('/despesas', expensesController.listExpense)
    .get('/despesas/:id', expensesController.listingExpenseById)
    .put('/despesas/:id', expensesController.updateExpense)
    .delete('/despesas/:id', expensesController.deleteExpense)

    export default router;
