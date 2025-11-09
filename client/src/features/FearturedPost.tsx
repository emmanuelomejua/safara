import Image from '../components/ui/Image';
import { Link } from 'react-router-dom';
import { useGetFeaturedPost } from '../util/api';
import moment from 'moment';

const FearturedPost = () => {

  const {data, isPending, error} = useGetFeaturedPost();
  console.log(data);

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Image src={posts[0].img || '/featured1.jpeg'} alt='' className='rounded-3xl object-cover' />

          {/* details */}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <span className="text-blue-800 lg:text-lg">{posts[0]?.category}</span>
            <span className="text-gray-500">{moment(posts[0].createdAt).fromNow()} . {moment(posts[0].createdAt).format('DD-MMM-YYYY')}</span>
          </div>

          {/* title */}
          <Link
            to={`/posts/${posts[0].slug}`}
            className="text-xl lg:text-3xl font-semibold lg:font-bold"
          >
            {posts[0].title}
          </Link>
        </div>
       
       <div className="w-full lg:w-1/2 flex flex-col gap-4">

         {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src='/featured1.jpeg'
              alt=''
              className="rounded-3xl object-cover w-full h-full"
              w={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <span className="text-blue-800">Web Design</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/posts/:slug'
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

             {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src='/featured1.jpeg'
              alt=''
              className="rounded-3xl object-cover w-full h-full"
              w={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <span className="text-blue-800">Web Design</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/posts/:slug'
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

             {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src='/featured1.jpeg'
              alt=''
              className="rounded-3xl object-cover w-full h-full"
              w={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <span className="text-blue-800">Web Design</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to='/posts/:slug'
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default FearturedPost;
