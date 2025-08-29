import type { FC } from "react";

type imageProps = {
    src: string;
    h?: number;
    w?: number;
    className?: string
    alt: string;
}

const Image:FC<imageProps> = ({src, h, w, className, alt}) => {
  return (
    <div>
        <img src={src} alt={alt} className={className} height={h} width={w}/>
    </div>
  )
}

export default Image;
