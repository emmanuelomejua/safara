import express from 'express';
import { addComment, deleteComment, getPostComment } from '../controllers/comment.cotroller.js';

const router = express.Router();

router.post('/:postId', addComment);

router.get('/:postId', getPostComment);

router.delete('/:id', deleteComment)

export default router;
