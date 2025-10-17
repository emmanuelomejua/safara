import { Button } from "../components/ui/Button";
import TextField from "../components/ui/TextField";


const Write = () => {
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a New Post</h1>

      <form className="flex flex-col gap-6 flex-1 mb-6">
        <Button className="cursor-pointer">Add a cover photo</Button>

        <TextField containerClassName='bg-white' className="text-4xl font-semibold bg-transparent outline-none" placeholder="Write a story" />

        <div className="flex items-center gap-4">
           <label htmlFor="" className="text-sm">
            Choose a category:
          </label>


        </div>
      </form>
    </div>
  )
}

export default Write;
