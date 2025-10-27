import { useAuth } from '@clerk/clerk-react'


export const useGetToken = () => {
    const { getToken } = useAuth()

    return getToken
}
