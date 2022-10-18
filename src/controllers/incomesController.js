import incomes from '../models/Income.js' ;

class incomesController{
    static registerIncome = (req, res) =>{
        let income = new incomes(req.body);

        income.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar receita`});
            }else {
                res.send(income.toJSON())
            }
        })
    }
    
    static listIncome = (req, res) => {
        incomes.find((err, incomes) => {
            if(err){
                res.status(500).send({message: `falha ao listar receita, erro ${err.message}`});
            } else{
                res.json(incomes);
            }
        })

    }

    static listingIncomeById = (req, res) =>{
        const id = req.params.id;

        incomes.findById(id, (err, incomes) =>{
            if(err){
                res.status(500).send({message: `${err.message} id não encontrado`});
            }else{
                res.send(incomes);
            }
        })

    }

    static updateIncome = (req, res) =>{
        const id = req.params.id;

        incomes.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err){
                res.status(500).send({message: `falha ao atualizar id ${err.message}`});
            }else{
              res.send('sucesso');
            }
            //add: retornar o body q foi modificado
        })
    }

    static deleteIncome = (req, res) => {
        const id = req.params.id;

        incomes.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send({message: `erro ao deletar id ${err.message}`});
            }else{
                res.send('id deletado por completo');
            }
        })
    }
}

export default incomesController;
