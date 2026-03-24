import getCheckoutUrl from "@/app/(pages)/tickets/register/getCheckoutUrl";
import { useEffect, useState } from "react";



export default function useCheckoutUrl(cart){
    const callbackUrl = `${process.env.NEXT_PUBLIC_URL}/tickets/checkout-confirmation`
    
    const [ checkoutUrl, setCheckoutUrl ] = useState({})


    async function fetchCheckoutUrl({ total, lineItems }){
       getCheckoutUrl({
            amount: parseInt(total)*100,
            currency: "ZAR",
            cancelUrl: `${callbackUrl}?status=cancelled`,
            successUrl: `${callbackUrl}?status=success`,
            failureUrl: `${callbackUrl}?status=failure`,
            metadata: {
                id: lineItems.map(item => item.id).join(","), 
                name: lineItems.map(item => item?.options?.first_name +" "+ item?.options?.last_name).join(","),
            },
            lineItems: lineItems.map(item => {
                return {
                    displayName: item?.type +" Ticket",
                    quantity: item?.quantity,
                    pricingDetails: {
                        price: parseInt(item.price) * 100
                    }
                }
            })

        }).then((res) => {
            setCheckoutUrl(res)
        })
    }




    useEffect(() => {
        const { total, lineItems } = cart

        if( total && lineItems ){
            fetchCheckoutUrl({ total, lineItems })
        }
        
    }, [ cart.total ])




    return {
        ...checkoutUrl
    }

}