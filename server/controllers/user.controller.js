import User from "../models/user.model.js"

export const getUserSavedPost = async (req, res) => {
  try {
    const clerkUserId = req.auth()?.userId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findOne({ clerkUserId }).select("savedPosts");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user.savedPosts);
  } catch (error) {
    console.error("Error fetching saved posts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



export const savedPost = async (req, res) => {
    const clerkUserId = req.auth().userId;
    const postId = req.body.postId

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    const isSaved = user.savedPosts.some((p) => p === postId);

    if(!isSaved){
        await User.findByIdAndUpdate(user._id, {
            $push: {savedPosts: postId}
        })
    } else {
        await User.findByIdAndUpdate(user._id, {
            $pull: {savedPosts: postId}
        })
    }

    res.status(200).json(isSaved ? 'Post has been saved!': 'Post has been unsaved')
}

