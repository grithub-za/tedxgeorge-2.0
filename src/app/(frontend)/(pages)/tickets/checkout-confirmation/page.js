import clsx from "clsx";
import Style from "../../Page.module.scss"
import Utils from "@/styles/globals/utils.module.scss"
import ConfirmationHeader from "@/components/registration/ConfirmationHeader";
import Link from "next/link";
import YourTicket from "@/components/registration/YourTicket";



export const metadata = {
    title: "Ticket Checkout",
    alternates: {
        canonical: "https://tedxgeorge.com/tickets/checkout-confirmation",
    }
}


async function TicketCheckout({ searchParams }){
    return(
        <section className="container text-center d-flex justify-content-center flex-column align-items-center">
            <div className={Style.heading}>
                <h1 className={clsx(Utils.fs_5, "fw-light")}>
                    Checkout 
                    {searchParams.status === "success" && " Success!"}
                    {searchParams.status === "failure" && " Failed."}
                    {searchParams.status === "cancelled" && " Was Cancelled."}
                </h1>

               <ConfirmationHeader status={searchParams.status} />

               <article>
                    <p className={clsx(Utils.fs_1)}>
                        {searchParams.status === "success" && "See you on October 5th!"}
                        {searchParams.status === "failure" && " Looks like something went wrong."}
                        {searchParams.status === "cancelled" && " You have cancelled your order."}
                    </p>
                </article>
            </div>

            <article className={Style.confirmation}>
                {searchParams.status === "success" && (
                    <>
                        <span className="display-1 text-center">🥳</span>

                        <p className="display-6 text-center">
                            You will receive a confirmation email shortly with your ticket and other information.  If you do not received an email within a few minutes, be sure to double check your SPAM/JunK folder. <br/>Continue reading about <Link href="/about">TEDxGeorge &rsaquo;</Link>
                        </p>

                        <p className="display-6 text-center">
                            If you need help or have any questions or concerns, please <a target="_blank" rel='noreferrer' href="https://chat.whatsapp.com/HGProtkIBL15I4K1ILAS71">contact us &rsaquo;</a>.
                        </p>

                        <YourTicket />
                    </>
                )}
                

                {searchParams.status === "failure" && (
                    <>
                        <span className="display-1 text-center">😢</span>

                        <p className="display-6 text-center">
                            Not sure what just happened and we are sorry for the inconvenience. <br/><Link href="/tickets/register">Please try again &rsaquo;</Link>.
                        </p>
                    </>
                )}


                {searchParams.status === "cancelled" && (
                    <>
                        <span className="display-1 text-center">🤔</span>

                        <p className="display-6 text-center">
                            If you need help or have any questions or concerns, please <a target="_blank" rel='noreferrer' href="https://chat.whatsapp.com/HGProtkIBL15I4K1ILAS71">contact us &rsaquo;</a>.
                        </p>
                    </>
                )}
            </article>
        </section>
    )
}

export default TicketCheckout;