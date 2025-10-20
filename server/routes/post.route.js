import express from 'express';

const router = express.Router();
import { createPost, deletePost, getPost, getPosts } from '../controllers/post.controller.js';


router.post('/create', createPost);

router.get('/', getPosts)

router.get('/:slug', getPost)

router.delete('/:id', deletePost)


export default router;
