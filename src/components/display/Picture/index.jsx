// import Image from "next/image";
import clsx from "clsx";
import Style from './Picture.module.scss'
import { blurImage } from "@/lib/utils/blurImage";


function Picture({ 
    width = null, 
    height = null, 
    alt = "authenteak image", 
    mobile = null, 
    desktop = null, 
    className = ""
}){
    return(
        <picture className={clsx(className, Style.block)}>
            <source srcSet={desktop ?? blurImage} media="(min-width: 600px)" />
            <source srcSet={mobile ?? blurImage} media="(max-width: 600px)" />

            <img 
                src={mobile ?? blurImage}
                {...{ alt, width, height }}
                className={Style.image}
                alt={alt}
            />
        </picture>
    )
}


export default Picture;