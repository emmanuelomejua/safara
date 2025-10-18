import type { FC } from "react";

type imageProps = {
    src: string;
    h?: number;
    w?: number;
    className?: string
    alt: string;
    onClick?: () => void;
}

const Image:FC<imageProps> = ({src, h, w, className, alt, onClick}) => {
  return (
    <div>
        <img src={src} alt={alt} className={className} height={h} width={w} onClick={onClick}/>
    </div>
  )
}

export default Image;
