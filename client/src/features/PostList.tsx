import PostListItem from './PostListItem';

const PostList = () => {
  return (
    <div className='flex flex-col mb-8 gap-12'>
       <PostListItem/>
       <PostListItem/>
       <PostListItem/>
       <PostListItem/>
       <PostListItem/>
       <PostListItem/>
    </div>
  )
}

export default PostList;
