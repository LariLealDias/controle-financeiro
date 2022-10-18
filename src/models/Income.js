import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    id: {type: String},
    descricao: {type: String, required: true, unique: true },
    valor: {type: String, required: true, unique: false},
    data: {type: String, required: true, unique: true }
});

const incomes = mongoose.model('receitas', incomeSchema);

export default incomes;
