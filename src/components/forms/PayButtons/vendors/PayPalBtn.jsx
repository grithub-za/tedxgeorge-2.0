import React, { useEffect, useState } from "react";

import Style from '../PayButtons.module.scss'


function PayPalBtn() {
    const [ hide, hideBtn ] = useState(false)

    useEffect(() => {

        try{
            checkoutKitLoader.load('checkout-button')
                .then(function (module) {
                    let initializer = checkoutButtonInitializer || module.createCheckoutButtonInitializer({ host: process.env.siteUrl });

                    initializer.initializeButton({
                        methodId: 'braintreepaypal',
                        containerId: '[data-braintree-paypal-container]',
                        braintreepaypal: {
                            shouldProcessPayment: false,
                            style: { 
                                "layout": "vertical", 
                                "color": "gold", 
                                "shape": "rect", 
                                "size": "large", 
                                "label": "checkout", 
                                "height": 40 
                            },
                            allowCredit: false
                        },
                    });

                    checkoutButtonInitializer = initializer;
                });

        }catch(err){
            hideBtn(true)
        }

    }, [])

    
    return (
        <>
        { !hide &&
            <div className={Style.paypal} data-braintree-paypal-container />
        }
        </>
    )
}

export default PayPalBtn;


