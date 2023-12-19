import Incomes from '../models/Income.js' ;

class incomesController{
    static registerIncome = async (req, res) => {
        const { descricao, valor, data } = req.body;
        try {
            const newIncome = await Incomes.create({descricao, valor, data});
            return res.status(201).json(newIncome);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static listIncome = async (req, res) => {
        try {
            const incomes = await Incomes.find();
            return res.status(200).json(incomes);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static listingIncomeById = async (req, res) => {
        const { id } = req.params;
        try {
            const income = await Incomes.findById(id);
            return res.status(200).json(income)
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static updateIncome = async (req, res) => {
        const { id } = req.params;
        const { newInfo } = req.body;
        try {
            // checking if the id exists
            const idExists = await Incomes.findById(id);
            if(!idExists) {
                return res.status().json({message: 'Id não existe'});
            }

            // updating income
            await Incomes.findByIdAndUpdate(newInfo, { where: { id: id} });
            console.log('Id atualizado com sucesso!');
            const newData = await Incomes.findById(id);
            return res.status(200).json(newData);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    static deleteIncome = async (req, res) => {
        const { id } = req.params;
        try {
            await Incomes.findByIdAndDelete(id);
            console.log('Id deletado');
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export default incomesController;
