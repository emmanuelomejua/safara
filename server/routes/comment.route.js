import express from 'express';
import { addComment, deleteComment, getPostComments } from '../controllers/comment.cotroller.js';

const router = express.Router();

router.post('/:postId', addComment);

router.get('/:postId', getPostComments);

router.delete('/:id', deleteComment)

export default router;
