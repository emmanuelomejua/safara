import express from 'express';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';

import postRoute from './routes/post.route.js'


dotenv.config()

const app = express();


app.use('/posts', postRoute)


const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Initialized server at port ${PORT}`)
    connectDB()
});


