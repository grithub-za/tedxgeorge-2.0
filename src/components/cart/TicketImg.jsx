import streamingImg from "@/public/streaming-ticket.png"
import vipImg from "@/public/vip-ticket.png";
import generalImg from "@/public/general-ticket.png";
import generalPlusImg from "@/public/general-plus.png";
import Image from "next/image";
import { useMemo } from "react";


function TicketImg({ type }){
    const imgUrl = useMemo(() => {
        switch(type){
            case "General":
                return generalImg
            case "General +":
                return generalPlusImg
            case "VIP":
                return vipImg
            case "Streaming":
                return streamingImg
            default:
                return "https://dummyimage.com/600x400/222222/777777.gif&text=+"
        }

    }, [ type ])


    return(
        <Image 
            src={imgUrl} 
            width={100} 
            height={100} 
            alt={type} 
             
        />
    )
}

export default TicketImg;