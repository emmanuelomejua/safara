import express from 'express';

const router = express.Router();
import { createPost, deletePost, getPost, getPosts, uploadAuth, featurePost } from '../controllers/post.controller.js';


router.post('/create', createPost);

router.get('/upload-auth', uploadAuth)

router.get('/', getPosts)

router.get('/:slug', getPost)

router.delete('/:id', deletePost)

router.patch('/feature', featurePost)


export default router;
