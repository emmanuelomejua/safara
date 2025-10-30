import { Button } from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useCreatePost } from "../util/api";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";
import Select from "../components/ui/Select";

const options = [
  {label: 'General', value: 'general'},
  {label: 'Web Design', value: 'web-design'},
  {label: 'Development', value: 'development'},
  {label: 'Search Engines', value: 'seo'},
  {label: 'Marketing', value: 'marketing'},
  {label: 'Databases', value: 'databases'},
]

const API_URL = import.meta.env.VITE_API_URL

 const authenticator = async () => {
        try {
            // Perform the request to the upload authentication endpoint.
            const response = await fetch(`${API_URL}posts/upload-auth`);
            if (!response.ok) {
                // If the server response is not successful, extract the error text for debugging.
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }

            // Parse and destructure the response JSON for upload credentials.
            const data = await response.json();
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            // Log the original error for debugging before rethrowing a new error.
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };


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

    if (!title || !desc || !category || !val) {
    toast('Please fill in all fields', { ...toastOptions })
    return;
  }

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

          <Select 
            options={options} 
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"/>
        </div>

        <textarea
          className="p-4 rounded-xl bg-white shadow-md outline-none"
          name="desc"
          placeholder="A Short Description"
        />

        <div className="flex gap-4">
          <div className="">🌆</div>
          <div className="">▶️</div>
        </div>

        <ReactQuill 
          theme="snow" 
          className="flex-1 rounded-xl mb-8 bg-white"
          value={val}
          onChange={setVal}
          />

        <Button 
          loading={mutation.isPending}
          className="bg-blue-800 text-white cursor-pointer font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
            Send
          </Button>
      </form>
    </div>
  )
}

export default Write;
