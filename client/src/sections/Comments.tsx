import { Button } from "../components/ui/Button";
import Comment from "./Comment";


const Comments = ({ postId }: { postId: number }) => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <form className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl outline-none border-[1px] border-[#0000ff7a]"
        />

        <Button className="cursor-pointer">Send</Button>
      </form>

      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}

export default Comments;
