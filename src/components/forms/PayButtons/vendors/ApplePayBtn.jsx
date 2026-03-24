import clsx from "clsx";
import Script from "next/script";
import Style from '../PayButtons.module.scss'


function ApplePayBtn() {
    const triggerApplPay = (e) => {
        if( e.key === "Enter" ) {
            e.preventDefault();
            applePayButton.click();
        }
    }

    return (
        <>
            <div 
                role="button"
                title="Apple Pay" 
                id="applepay-smart-button"
                className={clsx("apple-pay-checkout-button", Style.apple)}
                onKeyUp={triggerApplPay}
            /> 

            <Script 
                id="applePayButton"
                dangerouslySetInnerHTML={{
                    __html: `
                    if ( window.ApplePaySession && !window.ApplePay ) {
                        let script = document.createElement('script')
                        script.src = 'https://cdn11.bigcommerce.com/shared/js/applepay-0f9b461fafb6ba650eeb9f2bfef7eb10ae391c5e.js';
                        script.onload = function() {
                            window.ApplePay.init({"storeName":"AuthenTEAK","countryCode":"US","currencyCode":"USD","supportedNetworks":["visa","masterCard","amex","discover"],"gateway":"braintree","merchantCapabilities":["supports3DS"],"merchantId":"24beb309-2ded-52a6-ac6d-1b412680a938","paymentsUrl":"https:\/\/payments.bigcommerce.com","sentry":"https:\/\/e9baf8b77dd74141a0e9eaebb9dd3706@sentry.io\/1188037","confirmationLink":"\/checkout\/order-confirmation"});
                        }
                        document.head.appendChild(script);
                    }
                `}}
            />
        </>
    )
}

export default ApplePayBtn;