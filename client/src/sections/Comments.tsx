import type { FormEvent } from "react";
import { Button } from "../components/ui/Button";
import { useAddCommentMutation, useGetComments } from "../util/api";
import Comment from "./Comment";
import { toast } from "react-toastify";



const Comments = ({ postId }: { postId: string }) => {

  const { data, isPending, error } = useGetComments(postId);

  const mutation = useAddCommentMutation(postId)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget

    const formData = new FormData(form)

    const desc = formData.get('desc') as string;

    if (!desc.trim()) return toast.warn("Comment cannot be empty");

    mutation.mutate({desc})

  }

  if (isPending) return <p>Loading...</p>;

  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <form 
          onSubmit={handleSubmit}
          className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          required
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl outline-none border-[1px] border-[#0000ff7a]"
        />

        <Button type="submit" className="cursor-pointer">Send</Button>
      </form>

      {
        data?.map((comment: any) => (
          <Comment key={comment?._id} comment={comment} error={error}/>
        ))
      }
    </div>
  )
}

export default Comments;
