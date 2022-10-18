import expenses from "../models/Expense.js";

class expensesController{
    static registerExpense = (req, res) => {
        let expense = new expenses(req.body);

        expense.save((err) =>{
            if(err){
                res.status(500).send({message: `erro ao cadastrar nova dispesa ${err.message}`});
            }else{
                res.send(expense.toJSON());
            }
        })
    }

    static listExpense = (req, res) =>{
        expenses.find((err, expenses) => {
            if(err){
                res.status(500).send({message: `não foi possivel encontrar a lista de despesa ${err.message}`});
            }else{
                res.json(expenses);
            }
        })
    }

    static listingExpenseById = (req, res) => {
        const id = req.params.id; 

        expenses.findById(id, (err, expenses) => {
            if(err){
                res.status(500).send({message: `id nao localizado ${err.message}`});
            } else{
                res.send(expenses);
            }
        })
    }

    static updateExpense = (req, res) =>{
        const id = req.params.id;

        expenses.findByIdAndUpdate(id, {$set: req.body}, (err, expenses) => {
            if(err){
                res.status(500).send({message: `falha ao atualizar id ${err.message}`});
            }else{
                res.send('sucesso')
            }
        })
    }

    static deleteExpense = (req, res) => {
        const id = req.params.id;

        expenses.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `falha ao deletar id ${err.message}`});
            }else{
                res.send('deletado com sucesso');
            }
        })
    }
}

export default expensesController;
