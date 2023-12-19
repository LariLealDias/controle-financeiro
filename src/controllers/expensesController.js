import Expenses from "../models/Expense.js";

class expensesController{
    // adding async in the function
    static registerExpense = async (req, res) => {
        const { descricao, valor, data } = req.body;
        try {
            const expenses = await Expenses.create({descricao, valor, data});
            return res.status(201).json(expenses);
        } catch (error) {
            return res.status(400).json({ message: 'erro ao cadastrar nova dispesa', error });
        }
    }

    static listExpense = async (req, res) => {
        try {
            const data = await Expenses.find();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ message: 'não foi possivel encontrar a lista de despesa', error });
        }
    }

    static listingExpenseById = async (req, res) => {
        const { id } = req.params;
        try {
            const data = await Expenses.findById(id);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json({ message: 'id não localizado', error });
        }
    }

    static updateExpense = async (req, res) => {
        const { id } = req.params;
        const { newInfo } = req.body;
        try {
            await Expenses.findOneAndUpdate(newInfo, {where: { id: id } });
            const updatedData = await Expenses.findById(id);
            console.log('Atualizado com sucesso!');
            return res.status(200).json(updatedData);
        } catch (error) {
            return res.status(400).json({ message: 'falha ao atualizar id', error });    
        }
    }

    static deleteExpense = async (req, res) => {
        const { id } = req.params;
        try {
            await Expenses.findByIdAndDelete(id);
            return res.status(200).json({ message: 'Id deletado!' });
        } catch (error) {
            return res.status(400).json({ message: 'falha ao deletar id', error });
        }
    }
}

export default expensesController;
