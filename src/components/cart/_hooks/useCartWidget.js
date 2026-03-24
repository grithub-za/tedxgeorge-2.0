import { useContext } from "react";
import CartWidget from "../CartWidget";
import { GlobalContext } from "@/contexts/GlobalContext";

export default function useCartWidget(){
    const [ _, dispatch ] = useContext(GlobalContext);
    
    function open(){
        dispatch({
            type: "setWidget",
            data:{
                isOpen: true,
                component: <CartWidget />,
                heading: `Your Ticket Cart`
            }
        })
    }


    return{
        open
    }

}