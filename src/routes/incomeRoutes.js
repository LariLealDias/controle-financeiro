import express from "express";
import incomesController from "../controllers/incomesController.js";

const router = express.Router()

router
    .post('/receitas', incomesController.registerIncome)
    .get('/receitas', incomesController.listIncome)
    .get('/receitas/:id', incomesController.listingIncomeById)
    .put('/receitas/:id', incomesController.updateIncome)
    .delete('/receitas/:id', incomesController.deleteIncome)

export default router;
