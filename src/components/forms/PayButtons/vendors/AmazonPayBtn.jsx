import React, { useEffect, useState } from "react";

import Style from '../PayButtons.module.scss'


function AmazonPayBtn() {
    const [ hide, hideBtn ] = useState(false)

    useEffect(() => {

        try{
            checkoutKitLoader.load('checkout-button')
                .then(function (module) {
                    let initializer = module.createCheckoutButtonInitializer({
                            host: process.env.siteUrl
                        });

                    hideBtn(false)

                    return initializer.initializeButton({
                            methodId: 'amazonpay',
                            containerId: '[data-amazonpay-container-28f8]',
                            amazonpay: {
                                merchantId: 'A13LC47I9G7VZ1',
                                createCheckoutSession: {
                                    url: `${process.env.siteUrl}/remote-checkout/amazonpay/payment-session`,
                                    method: 'GET',
                                    extractAmazonCheckoutSessionId: 'token',
                                },
                                sandbox: false,
                                ledgerCurrency: 'USD',
                                checkoutLanguage: 'en_US',
                                productType: 'PayAndShip',
                                placement: 'Cart',
                                buttonColor: 'Gold',
                            },
                        });
                });

        }catch(err){}
        
    },[])


    return (
        <>
        { !hide && 
            <div className={Style.amazon}>
                <div className={Style.amazonCntr} data-amazonpay-container-28f8 />
            </div>
        }
        </>
    )
}

export default AmazonPayBtn;