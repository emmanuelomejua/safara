import express from 'express';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';
import morgan from 'morgan';

import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import userRoute from './routes/user.route.js'
import webhookRoute from './routes/webhook.route.js'



dotenv.config()

const app = express();
app.use('/api/webhook', webhookRoute);

app.use(express.json());

app.use(morgan('common'))


app.use('/api/posts', postRoute);
app.use('/api/comment', commentRoute);
app.use('/api/users', userRoute);


app.use((error, req, res, next) => {

    res.status(error.status || 500)


    res.json({
        message: error.message || 'Something went wrong!',
        status: error.status || 500,
    })
})


const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Initialized server at port ${PORT}`)
    connectDB()
});

