import { Typography } from "../components/ui/Typography";


const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <img src="/userImg.jpeg" alt="" className="rounded-full object-cover h-16 w-16" />
            <Typography className="font-500" label="Major Tompolo"/>
            <Typography className="text-sm text-blue-800" label="2 days ago"/>
        </div>

        <div className="mt-4">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit minus qui voluptas porro. Blanditiis tenetur nihil, magni adipisci totam, atque eum harum illum nisi cum quia. Amet velit aperiam error.</p>
        </div>
    </div>
  )
}

export default Comment;
