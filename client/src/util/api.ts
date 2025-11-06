import { useMutation, useQuery } from "@tanstack/react-query";
import SERVER from "./SERVER";
import { useGetToken } from "./getToken";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "../helpers/toastOptions";

interface PostData {
  title: string;
  desc: string;
  category: string;
  content: string;
  img?: any;
}


export const useCreatePost = () => {
   
    const { token, refreshToken } = useGetToken();
    const navigate = useNavigate();

    const mutatation = useMutation({
        mutationFn: async (data: PostData) => {
            const newToken = token || (await refreshToken());

            const res = await SERVER.post('posts/create', data, {
                headers: {
                    Authorization: `Bearer ${newToken}`
                }
            });
            return res.data;
        },
        onSuccess: (data) => {
            toast.success('Post created successfully!', { ...toastOptions })
            navigate(`/posts/${data.slug}`)
        },
        onError(error) {
            toast.error(`${error.message}`, { ...toastOptions })
        },
    });
    return mutatation;
}


export const useGetSinglePost = (slug: string ) => {

    const getPost = async (slug: string) => {
        const res = await SERVER.get(`posts/${slug}`);
        return res.data;
    }

    const { data, isPending, error } = useQuery({
        queryKey: ['post', slug],
        queryFn: () =>  getPost(slug)
    });

    return { data, isPending, error }
}
