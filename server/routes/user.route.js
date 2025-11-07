import express from 'express';
import { getUserSavedPost, savedPost } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/saved-posts', getUserSavedPost);

router.patch('/save-post', savedPost)


export default router;
