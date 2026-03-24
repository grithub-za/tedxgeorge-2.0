"use client"

import FullWidth from "./FullWidth";
import TicketModules from "./TicketModules";


function TicketTable({ sold }){
    return(
        <section className="container">
            <FullWidth {...{ sold }} />
            <TicketModules  {...{ sold }} />
        </section>
    )
}

export default TicketTable;