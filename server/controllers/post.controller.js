import Post from "../models/post.model.js"


export const createPost = async (req, res) => {

    const newPost = new Post(req.body);

    const post = await newPost.save();

    res.status(200).json(post);

}


export const getPosts = async (req, res) => {

    const posts = await Post.find();
    
    res.status(200).json(posts)

}


export const getPost = async (req, res) => {

    const posts = await Post.findOne({ slug: req.params.slug });

    res.status(200).json(posts);

}


export const deletePost = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

