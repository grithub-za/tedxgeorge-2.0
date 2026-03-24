import clsx from "clsx";
import Style from "./TicketTable.module.scss"
import { ticketList } from "@/lib/ticketList"
import Utils from "@/styles/globals/utils.module.scss"
import TicketImg from "../cart/TicketImg";
import RegisterBtn from "./RegisterBtn";



function TicketModules({ sold }){
    return(
        <div className={Style.modules}>
            {ticketList.map((ticket) => {
                return(
                    <article className={Style.col} key={ticket.type}>
                        <header className={Style.header}>
                            <TicketImg type={ticket.type} />
                            
                            <div className={Style.subHeading}>
                                <h2 className={clsx(Utils.fs_2, "mb-0")}>
                                    {ticket.type}
                                </h2>
                                <small>
                                    {ticket.description}
                                </small>
                            </div>
                        </header>

                        <ul className={Style.list} key={ticket.price}>
                            {ticket.features.map((feature, i) => {
                                if( !feature.included ) return null

                                return (
                                    <li className={Style.item} key={feature.title}>
                                        {feature.title}
                                    </li>
                                )
                            })}

                            <RegisterBtn 
                                {...ticket}
                                sold={sold[ticket.type]}
                                isSoldOut={sold[ticket.type] >= ticket.allocation}
                            />
                        </ul>
                    </article>
                )
            })}
        </div>
    )
}

export default TicketModules;