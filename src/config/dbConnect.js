import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Controle-Financeiro:123@cf.eynyyo5.mongodb.net/Controle-Financeiro?');

let db = mongoose.connection;

export default db;