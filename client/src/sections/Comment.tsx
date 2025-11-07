import { Typography } from "../components/ui/Typography";
import moment from "moment";


const Comment = ({comment, error}: any) => {

  if (error) return <p>Error loading post...</p>;

  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <img src={comment.user.img || "/userImg.jpeg"} alt="" className="rounded-full object-cover h-16 w-16" />
            <Typography 
              className="font-500" 
              label={comment.user.username}/>

            <Typography 
              className="text-sm text-blue-800" 
              label={moment(comment.createdAt).fromNow()}/>
        </div>

        <div className="mt-4">
            <p>{comment.desc}</p>
        </div>
    </div>
  )
}

export default Comment;
