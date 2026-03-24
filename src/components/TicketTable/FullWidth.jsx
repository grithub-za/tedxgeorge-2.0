import { features, ticketList } from "@/lib/ticketList"
import Checkmark from "@/icons/Checkmark"
import Cross from "@/icons/Cross"
import Utils from "@/styles/globals/utils.module.scss"
import clsx from "clsx"
import Style from "./TicketTable.module.scss"
import RegisterBtn from "./RegisterBtn"
import Link from "next/link"


function FullWidth({ sold }){
    return(
        <div className={Style.full}>
            <div className="row align-items-start">
                <div className="col-4">
                    <h2 className={clsx(Utils.fs_2)}>
                        Ticket Comparison
                    </h2>
                </div>

                {ticketList.map((ticket) => {
                    return(
                        <div className="col text-center" key={ticket.type}>
                            <h2 className={clsx(Utils.fs_4, "mb-0")}>
                                {ticket.type}
                            </h2>

                            <small dangerouslySetInnerHTML={{ __html: ticket.description }} />
                         
                        </div>
                    )
                })}
            </div>


            <div className="row">
                <div className="col-4 p-0">
                    {Object.keys(features).map((feature, i) => {
                        return (
                            <div className={clsx("col p-4", (i % 2) && Style.zebraStripe, Style.cell)} key={feature}>
                                {features[feature].href ? (
                                    <Link href={features[feature].href}>
                                        {features[feature].title}
                                    </Link>
                                ):(
                                    <>{features[feature].title}</>
                                )}
                                
                                {features[feature]?.toolTip}
                            </div>
                        )
                    })}

                    <div className={clsx(Utils.fs_2, "col p-4 m-0")} style={{ borderTop: "5px double #555"}}>
                        Ticket Price:
                    </div>
                </div>

                {ticketList.map((ticket) => {
                    return(
                        <div className="col p-0" key={ticket.price}>
                            {ticket.features.map((feature, i) => {
                                return (
                                    <div 
                                        className={clsx("py-4 d-flex justify-content-center", (i % 2) && Style.zebraStripe, Style.cell)} 
                                        key={feature.title}
                                    >
                                        {feature.included ? <Checkmark /> : <Cross />}
                                    </div>
                                )
                            })}

                            <RegisterBtn 
                                {...ticket}
                                sold={sold[ticket.type]}
                                isSoldOut={sold[ticket.type] >= ticket.allocation}
                            />
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default FullWidth;