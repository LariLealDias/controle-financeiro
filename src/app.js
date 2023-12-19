import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js'
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// MongoDb connection
// mongoose.connect(process.env.DB_URI)
// .then(() => {
//     console.log('Connect to database')
// }).catch((error) => {
//     console.log('MondoDB connection error: ', error)
// });

app.use(express.json());
routes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
