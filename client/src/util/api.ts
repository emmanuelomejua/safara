import { useMutation } from "@tanstack/react-query";
import SERVER from "./SERVER";
import { useGetToken } from "./getToken";
import { useNavigate } from "react-router-dom";

interface PostData {
  title: string;
  desc: string;
  category: string;
  content: string;
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
            navigate(`/posts/${data.slug}`)
        },
        onError(error) {
            console.log(error)
        },
    });
    return mutatation;
}
