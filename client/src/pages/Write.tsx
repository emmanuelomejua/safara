import { Button } from "../components/ui/Button";
import TextField from "../components/ui/TextField";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useCreatePost } from "../util/api";
import { useReducer, type FormEvent } from "react";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";
import Select from "../components/ui/Select";
import Upload from "../helpers/Upload";
import type { State } from "../type";
import postReducer from "../util/postReducer";


const options = [
  {label: 'General', value: 'general'},
  {label: 'Web Design', value: 'web-design'},
  {label: 'Development', value: 'development'},
  {label: 'Search Engines', value: 'seo'},
  {label: 'Marketing', value: 'marketing'},
  {label: 'Databases', value: 'databases'},
]

const initialState: State = {
  val: "",
  progress: 0,
  cover: "",
  img: "",
  video: "",
};

const Write = () => {


  const [state, dispatch] = useReducer(postReducer, initialState);
  const mutation = useCreatePost();


  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget

    const formData = new FormData(form);

    const title = formData.get('title') as string;
    const desc = formData.get('desc') as string;
    const category = formData.get("category") as string;

    if (!title || !desc || !category || !state.val ) {
    toast('Please fill in all fields', { ...toastOptions })
    return;
  }
    mutation.mutate({title, desc, category, content: state.val, img: state.cover.filePath })
  }


  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a New Post</h1>

      <form className="flex flex-col gap-6 flex-1 mb-6" onSubmit={handleSubmit}>
         <Upload type="image" 
         setProgress={(p: number) => dispatch({ type: "SET_PROGRESS", payload: p })}
          setData={(data: any) => dispatch({ type: "SET_COVER", payload: data })}
          >
            <Button className="cursor-pointer">Add a cover photo</Button>
         </Upload>

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
            <Upload 
              type="image" 
              setProgress={(p: number) => dispatch({ type: "SET_PROGRESS", payload: p })}
            setData={(data: any) => dispatch({ type: "SET_IMG", payload: data })}
              >
              🌆
            </Upload>
            <Upload 
              type="video" 
              setProgress={(p: number) => dispatch({ type: "SET_PROGRESS", payload: p })}
              setData={(data: any) => dispatch({ type: "SET_VIDEO", payload: data })}
              >
              ▶️
            </Upload>
        </div>

        <ReactQuill 
          theme="snow" 
          className="flex-1 rounded-xl mb-8 bg-white"
          value={state.val}
          onChange={(value) => dispatch({ type: "SET_VAL", payload: value })}
          />

        <Button 
          loading={mutation.isPending || (0 < state.progress && state.progress < 100)}
          className="bg-blue-800 text-white cursor-pointer font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
          {mutation.isPending ? "Loading..." : "Send"}
          </Button>
           {"Progress:" + state.progress}
      </form>
    </div>
  )
}

export default Write;
