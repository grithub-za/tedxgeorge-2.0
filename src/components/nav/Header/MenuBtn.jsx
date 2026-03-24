"use client"

import { useContext } from "react";
import Style from "./Header.module.scss"
import { GlobalContext } from "@/contexts/GlobalContext";


function MenuBtn(){
    const [ state, dispatch ] = useContext(GlobalContext)

    return(
        <button aria-labelledby="menu" name="main menu" type="button" className={Style.menuBtn} onClick={() => dispatch({ type: "toggleNav" })}>
            <svg id="menu" viewBox="0 0 24 24" fill="#fff" width={50} height={50} aria-label="main menu">
                <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
            </svg>
        </button>
    )
}

export default MenuBtn;