import Comments from "../models/comment.model.js";
import userModel from "../models/user.model.js";


export const addComment = async (req, res) => {
    const clerkUserId = req.auth().userId;
    const postId = req.params.postId;

    if(!clerkUserId) return res.status(401).json({ message: 'Not authnticated' });

    const user = await userModel.findOne({ clerkUserId });

    const comment = new Comments({
        ...req.boy, 
        user: user._id, 
        post: postId
    })

    const newComment = await comment.save();

    res.status(200).json(newComment)
}


export const getPostComments = async (req, res) => {
    const comment = await Comments
                    .findOne({ post: req.params.postId })
                    .populate('user', 'username img')
                    .sort({ createdAt: -1 });

    if(!comment || comment.length === 0){
        return res.status(404).json('No Comment found!')
    }

    res.status(200).json(comment);
}


export const deleteComment = async (req, res) => {
    const clerkUserId = req.auth().userId;
    const id = req.params.id;

    if(!clerkUserId) return res.status(401).json({ message: 'Not authnticated' });

    const user = await userModel.findOne({ clerkUserId });

    const del = await Comments.findOneAndDelete({ _id: id, user: user._id });

    if(!del) return res.status(403).json({message: 'Unathorized action'})

    res.status(200).json('Comment has been deleted!')

}
