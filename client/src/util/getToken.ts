import { useAuth } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

export const useGetToken = () => {
  const { getToken, isLoaded } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (!isLoaded) return;
      const fetchedToken = await getToken();
      setToken(fetchedToken);
    };
    fetchToken();
  }, [getToken, isLoaded]);

  return { token, refreshToken: getToken };
};
