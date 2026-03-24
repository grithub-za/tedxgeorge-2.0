"use client"

import Card from "@/components/display/Card";
import Style from "./CartItem.module.scss";
import { IconTrash } from "@/icons/IconTrash";
import Price from "@/components/Price";
import Quantity from "@/components/Quantity";
import { useContext, useMemo, useState } from "react";
import { LocalStorage } from "@/services/LocalStorage.service";
import { GlobalContext } from "@/contexts/GlobalContext";
import TicketImg from "../../TicketImg";


function Item({ 
    type, 
    price, 
    quantity, 
    id,
    options = null,
    listPrice = null, 
    canRemove = true, 
    canEdit = false,
    showPrice = true 
}){
    const [ state, dispatch ] = useContext(GlobalContext);
    const [ qty, setQty ] = useState(quantity)

    const ticketTotal = useMemo(() => {
        if (qty !== quantity ){
            debugger
            const newTotal = (listPrice ?? price) * qty;
            const updatedTicket = { type, id, price: newTotal, quantity: qty, listPrice: listPrice ?? price }

            LocalStorage.addToStorage("TXG_cart", updatedTicket)

            dispatch({
                type: "updateCart",
                data: updatedTicket
            })

            return newTotal
        }

    }, [ qty ])




    function removeItem({ price, id }){
        LocalStorage.removeFromStorage("TXG_cart", { id })

        const newCart = { ...state.cart }

        newCart.total -= price;
        newCart.lineItems = newCart.lineItems.filter(i => i.id !== id)

        dispatch({
            type: "setCart",
            data: newCart
        })
    }



    return(
        <Card className={Style.block}>
            <TicketImg type={type} />

            <div className={Style.details}>
                <p className={Style.title}>
                    Ticket: <strong>{type}</strong>
                </p>

                {options && (
                    <ul className={Style.options}>
                        {Object.keys(options).map((optionKey) => {
                            if(optionKey === "kids_zone") return null
                            if((type !== "VIP" && type !== "General +") && optionKey === "after_party") return null
                            if(type !== "VIP" && optionKey === "tee_shirt_size") return null

                            return(
                                <li key={optionKey} className={Style.optionItem}>
                                    <div className={Style.optionKey}>
                                        {optionKey.split("_").join(" ")}:
                                    </div> 

                                    <strong className={Style.optionValue}>
                                        {options?.[optionKey] ? (typeof options?.[optionKey] === "boolean" ? "Yes" : options?.[optionKey]) : "-none-"}
                                    </strong>
                                </li>
                            )
                        })}
                    </ul>
                )}

                <div className={Style.priceRow}>
                    {canEdit && (
                        <Quantity 
                            qty={qty} 
                            size="sm"
                            onChange={(qty) => setQty(qty)}
                        />
                    )}


                    {showPrice && (
                        <Price 
                            value={ticketTotal ?? price} 
                            size="sm" 
                        />
                    )}
                    

                    {canRemove && (
                        <button 
                            type="button" 
                            className={Style.removeBtn}
                            onClick={() => removeItem({ price, id })}
                        >
                            <IconTrash width="25" height="25" fill="#fff" />
                        </button>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default Item;