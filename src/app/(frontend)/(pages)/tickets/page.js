import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import TicketTable from "@/components/TicketTable"
import getTicketCount from "./getTicketCount"


export const dynamic = 'force-dynamic'


export const metadata = {
    title: "Purchase Tickets",
    alternates: {
        canonical: "https://tedxgeorge.com/tickets",
    }
}


async function Tickets(){
    const sold =  await getTicketCount()

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Purchase Tickets
                    </h1>

                    <article>
                        <p className={clsx(Utils.fs_1)}>
                            "Shift" Event Registration 2025
                        </p>
                    </article>
                </div>
            </section>

            <TicketTable {...{ sold }} />
        </>
    )
}

export default Tickets;