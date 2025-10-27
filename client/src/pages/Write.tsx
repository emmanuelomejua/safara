import { Button } from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useUser } from "@clerk/clerk-react";
import { useCreatePost } from "../util/api";
import { useState, type FormEvent } from "react";



const Write = () => {

  const [val, setVal] = useState('')

  const mutation = useCreatePost();

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget

    const formData = new FormData(form);

    const title = formData.get('title') as string;
    const desc = formData.get('desc') as string;
    const category = formData.get("category") as string;

    mutation.mutate({title, desc, category, content: val})
  }


  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a New Post</h1>

      <form className="flex flex-col gap-6 flex-1 mb-6" onSubmit={handleSubmit}>
        <Button className="cursor-pointer">Add a cover photo</Button>

        <TextField name="title" containerClassName='bg-white' className="text-4xl font-semibold bg-transparent outline-none" placeholder="Write a story" />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>

          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          className="p-4 rounded-xl bg-white shadow-md outline-none"
          name="desc"
          placeholder="A Short Description"
        />

        <ReactQuill 
          theme="snow" 
          className="flex-1 rounded-xl mb-8 bg-white"
          value={val}
          onChange={setVal}
          />


          <Button className="bg-blue-800 text-white cursor-pointer font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">Send</Button>

      </form>
    </div>
  )
}

export default Write;
