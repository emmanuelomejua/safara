import { Link } from 'react-router-dom';
import Image from '../components/ui/Image';
import moment from 'moment'


const PostListItem = ({post}: any) => {


  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-12'>

        {/* image */}
       <div className="md:hidden xl:block xl:w-1/3">
          <Image 
            src={post?.img || '/featured1.jpeg'} 
            alt='' className="rounded-2xl object-cover" w={735} />
       </div>

        {/* details */}
       <div className="flex flex-col gap-4 xl:w-2/3">
          <Link to={`/posts/${post?.slug}`} className='text-4xl font-semibold'>
            {post?.title}
          </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/posts?author=${post?.user?.username}`}>{post?.user?.username}</Link>
          <span>on</span>
          <span className="text-blue-800">{post?.category}</span>
          <span>{moment(post.createdAt).format('MMM D, YYYY')} • {moment(post.createdAt).fromNow()}</span>
        </div>
        <p>{post?.desc}</p>
        <Link to={`/posts/${post?.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
       </div>
    </div>
  )
}

export default PostListItem;
