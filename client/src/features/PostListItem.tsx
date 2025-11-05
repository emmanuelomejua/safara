import { Link } from 'react-router-dom';
import Image from '../components/ui/Image';

const PostListItem = ({post}: any) => {
  
  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-12'>

        {/* image */}
       <div className="md:hidden xl:block xl:w-1/3">
          <Image src='/featured1.jpeg' alt='' className="rounded-2xl object-cover" w={735} />
       </div>

        {/* details */}
       <div className="flex flex-col gap-4 xl:w-2/3">
          <Link to='/posts/:slug' className='text-4xl font-semibold'>
            {post?.title}
          </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to='/posts/:slug'>Major Tompolo</Link>
          <span>on</span>
          <span className="text-blue-800">Web Design</span>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt expedita aspernatur illo iusto eos. In fugiat eum mollitia? Soluta ab quas quis voluptatem molestias. Eveniet quos alias labore necessitatibus!</p>
        <Link to='/posts/:slug' className="underline text-blue-800 text-sm">
          Read More
        </Link>
       </div>
    </div>
  )
}

export default PostListItem;
