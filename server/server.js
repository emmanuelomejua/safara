import express from 'express';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';


dotenv.config()

const app = express();

const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Initialized server at port ${PORT}`)
    connectDB()
});


