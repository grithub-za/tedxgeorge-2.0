"use client"

import Price from "@/components/Price";
import useCartWidget from "@/components/cart/_hooks/useCartWidget";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import { useContext, useRef } from "react";
import Style from "./TicketTable.module.scss"
import generateID from "@/lib/utils/generateID";
import { IconPlus } from "@/icons/IconPlus";
import clsx from "clsx";


// check to lookup how many types of tickets are currently in Google Sheets
// if it exceeds the amount allocated then disable the button

function RegisterBtn({ 
    allocation,
    priceRaw, 
    type, 
    quantity = 1, 
    discount = null,
    sold = 0, 
    isSoldOut = false 
}){
    const [ _, dispatch ] = useContext(GlobalContext);
    const cart = useCartWidget()
    const finalPrice = useRef(discount ? Math.floor(priceRaw - (priceRaw * discount)) : priceRaw)


    function register(){
        // const id = generateID()

        window.location.href="https://www.quicket.co.za/events/324812-tedx-george-2025/#/seats"

        // LocalStorage.addToStorage("TXG_cart", { 
        //     type, 
        //     price: finalPrice.current, 
        //     quantity, 
        //     id 
        // })

        // dispatch({
        //     type: "addToCart",
        //     data: {
        //         type,
        //         price: finalPrice.current,
        //         quantity,
        //         id
        //     }
        // })

        // cart.open()
    }


    return(
        <div 
            className="py-4 d-flex align-items-center flex-column" 
            style={{ borderTop: "5px double #555"}}
        >
            

            <span className={Style.price}>
                <Price 
                    showSaleFlag={!!discount}
                    discount={discount}
                    listPrice={priceRaw}
                    value={finalPrice.current} 
                />
            </span>

            {/* {(allocation - sold) < 5 && (
                <small className={Style.fewLeft}>
                    Only {allocation - sold} left! - Order Soon
                </small>
            )} */}

            <button 
                type="button" 
                className={clsx(isSoldOut ? "btn-secondary" : "btn-success", "btn  py-2 px-4 fs-2 d-flex align-items-center justify-content-center")}
                onClick={register}
                disabled={isSoldOut}
            >
                {isSoldOut ? "Not Available" : (
                    <>
                        <IconPlus width={24} height={24} fill="#fff" />
                        Add Ticket
                    </>
                )}
            </button>
        </div>
    )
}

export default RegisterBtn;