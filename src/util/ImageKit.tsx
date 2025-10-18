import { Image } from '@imagekit/react';
import type { FC } from 'react';


type imagekitProps = {
    src: string;
    h: number;
    w: number;
    className: string
    alt: string;
    q?: number
    loading?: 'lazy' | 'eager'
}

const ImageKit:FC<imagekitProps> = ({src, w, h, className, loading='lazy', q=20}) => {
  return (
    <div className="">
        <Image
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
            src={src}
            height={h}
            width={w}
            loading={loading}
            quality={q}
            className={className}
            transformation={[{width: w, height: h}]}
        />
    </div>
  )
}

export default ImageKit;
