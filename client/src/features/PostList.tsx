import PostListItem from './PostListItem';
import { useQuery } from '@tanstack/react-query'; 
import SERVER from '../util/SERVER'


const getPosts = async () => {
  const res = await SERVER.get('posts');
  return res.data;
}


const PostList = () => {

  const { data, error, isPending } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  console.log(data)

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
