import PostListItem from './PostListItem';
import { useInfiniteQuery } from '@tanstack/react-query'; 
import InfiniteScroll from 'react-infinite-scroll-component'
import SERVER from '../util/SERVER'
import { useSearchParams } from 'react-router-dom';


const getPosts = async (pageParam: number, searchParams: URLSearchParams) => {

  const searchParamsObj = Object.fromEntries(searchParams.entries())

  const res = await SERVER.get('posts', {
    params: {
      page:  pageParam, 
      limit: 10,
      ...searchParamsObj 
    }
  });
  return res.data;
}


const PostList = () => {

  const [searchParams] = useSearchParams();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts', searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam, searchParams ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, page) => lastPage.hasMore ? page.length + 1 : undefined,
  })

  if (status === 'pending') return <div>Loading...</div>;

  if (status === 'error') return <div>Error loading posts...</div>;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <>
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post?._id} post={post} />
      ))}

       {isFetchingNextPage && <p className="text-center py-4">Loading more...</p>}
    </InfiniteScroll>
    </>
  )
}

export default PostList;
