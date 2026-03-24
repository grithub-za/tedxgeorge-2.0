"use client"
/* eslint-disable react-hooks/exhaustive-deps */

// import GenerateID from "lib/Utils/generateID";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { IconClose } from "components/icons";

import Style from './ImageUpload.module.scss';


function ImageUpload({ onUpload = () => null }) {
    
    const [images, setImages] = useState([])
    
        useEffect(() => {
            if (onUpload) { onUpload(images); } 
        
    }, [ images ])
   
    const handleImageChange = (e) => {

        //dont allow duplicate image upload based on imagename
        Array.from(e.target.files).forEach(file => {
            if (images.find(e => e.name === file.name) === undefined) {
                 setImages((previousImages) => previousImages.concat(file));
            }
            

        }); 
       
    }
    
    const removeImage = (img) => {

        setImages([...(images.filter((e) => e.name !== img.name))]);
  
    }


    return(
        <div className={Style.block}>
            <input 
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                onClick={(e)=> {e.target.value = null}}
            />

            <ul>
                {images.map((img, index) => {                    
                    return(
                        // <li key={GenerateID()}>
                        <li key={"image_" + index}>
                            <Image
                                width={100}
                                height={100}
                                alt=""
                                src={URL.createObjectURL(img)}
                                 
                            />
                            <button 
                                role="button"
                                className={Style.closeBtn}
                                onClick={() =>removeImage(img)}
                            >
                                <IconClose width={30} height={30} />
                            </button>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}


export default ImageUpload;