import express  from 'express';
import routeExpense from './expenseRoutes.js'
import routeIncome from './incomeRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'teste index'})
    })

    app.use(
        express.json(),
        routeExpense,
        routeIncome
    )
}

export default routes;