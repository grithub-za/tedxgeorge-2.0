"use client"

import Link from "next/link";
import Style from "./TicketBtn.module.scss";
import clsx from "clsx";
import useCartWidget from "@/components/cart/_hooks/useCartWidget";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import { usePathname } from "next/navigation";


function TicketBtn(){
    const cart = useCartWidget()
    const [ state, dispatch ] = useContext(GlobalContext);
    const [ qty, setQty ] = useState(0)
    const pathName = usePathname()


    useEffect(() => {
        const cartData = LocalStorage.getStorage("TXG_cart")

        if(cartData){
            const cartQty = cartData.reduce((acc, item) => acc + item.quantity, 0)
            
            setQty(cartQty)

            dispatch({
                type: "setCart",
                data: {
                    total: cartData.reduce((acc, item) => acc + item.price, 0),
                    lineItems: cartData
                }
            })

        }else{
            setQty(0)
        }

    }, [ 
        state.cart.total,
        pathName 
    ])


    return(
        <li className="btn-group" role="group" aria-label="Ticket Cart">
            <Link href="/tickets" className={clsx(Style.btn, "btn btn-danger px-4 py-3")}>
                Tickets
            </Link>

            {qty ? (
                <button 
                    type="button" 
                    className={clsx(Style.block, "btn btn-outline-danger")}
                    onClick={cart.open}
                >
                    <svg className={Style.icon} viewBox="0 0 24 24">
                        <path d="M11 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                        <path d="M22 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                        <path d="M23.8 5.4c-0.2-0.3-0.5-0.4-0.8-0.4h-16.2l-0.8-4.2c-0.1-0.5-0.5-0.8-1-0.8h-4c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.2l0.8 4.2c0 0 0 0.1 0 0.1l1.7 8.3c0.3 1.4 1.5 2.4 2.9 2.4 0 0 0 0 0.1 0h9.7c1.5 0 2.7-1 3-2.4l1.6-8.4c0-0.3 0-0.6-0.2-0.8zM20.4 14.2c-0.1 0.5-0.5 0.8-1 0.8h-9.7c-0.5 0-0.9-0.3-1-0.8l-1.5-7.2h14.6l-1.4 7.2z"></path>
                    </svg>

                    <span className={Style.qty}>
                        {qty}
                    </span>
                </button>
            ):null}
        </li>
    )
}

export default TicketBtn;