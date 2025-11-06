import PostListItem from './PostListItem';
import { useInfiniteQuery } from '@tanstack/react-query'; 
import InfiniteScroll from 'react-infinite-scroll-component'
import SERVER from '../util/SERVER'


const getPosts = async (pageParam: number) => {
  const res = await SERVER.get('posts', {
    params: {
      page:  pageParam, 
      limit: 10 
    }
  });
  return res.data;
}


const PostList = () => {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
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
