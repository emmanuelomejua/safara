import { useMutation } from "@tanstack/react-query";
import SERVER from "./SERVER";
import { useGetToken } from "./getToken";

interface PostData {
  title: string;
  desc: string;
  category: string;
  content: string;
}


export const useCreatePost = () => {
    const token = useGetToken();
    console.log(token)
    const mutatation = useMutation({
        mutationFn: async (data: PostData) => {
            const res = await SERVER.post('posts/create', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data;
        },
        onSuccess: () => {
            console.log('Successful!!')
        },
        onError(error, variables, onMutateResult, context) {
            console.log(error)
        },
    });
    return mutatation;
}
