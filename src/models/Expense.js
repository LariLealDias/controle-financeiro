import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    id: {type: String},
    descricao: {type: String, required: true, unique: true },
    valor: {type: String, required: true},
    data: {type: Date, required: true, unique: true }
});

const expenses = mongoose.model('despesas', expenseSchema);

export default expenses;

