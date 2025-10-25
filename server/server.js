import express from 'express';
import connectDB from './lib/connectDB.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import userRoute from './routes/user.route.js'
import webhookRoute from './routes/webhook.route.js'
import { clerkMiddleware, requireAuth } from "@clerk/express";


dotenv.config()

const app = express();
app.use(clerkMiddleware());
app.use('/api/webhook', webhookRoute);

app.use(express.json());
app.use(cors(process.env.CLIENT_URL))
app.use(morgan('common'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use('/api/posts', postRoute);
app.use('/api/comment', commentRoute);
app.use('/api/users', userRoute);


app.use((error, req, res, next) => {

    res.status(error.status || 500);

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

