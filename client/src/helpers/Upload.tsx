import { IKContext, IKUpload } from "imagekitio-react";
import { useRef, type ReactNode } from "react";
import { toast } from "react-toastify";

interface uploadType {
    children: ReactNode;
    type: string;
    setProgress: any;
    setData: any;
}

const API_URL = import.meta.env.VITE_API_URL

const authenticator = async () => {
  try {
   const response = await fetch(`${API_URL}posts/upload-auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }: uploadType) => {
  const ref = useRef<any>(null);

  const onError = (err: string) => {
    console.log(err);
    toast.error("Image upload failed!");
  };
  const onSuccess = (res: any) => {
    console.log(res);
    setData(res);
  };
  const onUploadProgress = (progress: any) => {
    console.log(progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_urlEndPoint}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
