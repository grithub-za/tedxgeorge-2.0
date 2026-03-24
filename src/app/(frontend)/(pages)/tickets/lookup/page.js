"use client"

import Item from "@/components/cart/CartWidget/Item";
import Style from "@/components/registration/RegisterForm/RegisterForm.module.scss"
import clsx from "clsx";
import getTicket from "./getTicket";
import { useState } from "react";
import useButtonFeedback from "@/components/forms/Button/useButtonFeedback";
import ButtonFeedback from "@/components/forms/Button/ButtonFeedback";


function LookUp(){
    const [ ticketId, setTicketId ] = useState("")
    const [ ticketData, setTicketData ] = useState(null)
    const feedback = useButtonFeedback()


    return(
        <section className="container d-flex flex-column align-items-center justify-content-center" style={{ marginBottom: "20rem", marginTop: "20rem" }}>
            <form className="col-6 mb-5" onSubmit={(e) => e.preventDefault()}>
                <p className={clsx(Style.controlGroup, "mb-2")}>
                    <input 
                        placeholder="Enter the ticket ID for first and last name"
                        id="ticket_id"
                        name="ticket_id"
                        required
                        type="text" 
                        className={Style.control}
                        onChange={(e) => setTicketId(e.target.value.trim())}
                    />
                </p>

                <button 
                    type="button" 
                    className={clsx(Style.btn, "btn btn-danger mt-0")}
                    onClick={async () => {
                        feedback.setLoading(true)
                        const ticket = await getTicket(ticketId)

                        setTicketData(ticket)
                        feedback.setLoading(false)
                    }}
                >
                    <ButtonFeedback {...feedback}>
                        Submit
                    </ButtonFeedback>
                </button>
            </form>

            {ticketData && (
                <>
                    {Object.keys(ticketData).map((key, index) => (

                        <aside className="col-6 p-5">
                            <Item 
                                type={ticketData[key].type}
                                canRemove={false} 
                                canEdit={false} 
                                showPrice={false}
                                {...{
                                    options: ticketData[key],
                                }}
                            />
                        </aside>
                    ))}
                </>
            )} 
            
        </section>
    )
}


export default LookUp;