import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import { eventsList } from "@/lib/eventList"
import { MainEvent } from "@/components/JSONld"
import EventItem from "@/components/events/EventItem"

export const dynamic = 'force-static'

export const metadata = {
    title: "Events",
    alternates: {
        canonical: "https://tedxgeorge.com/events",
    },
    openGraph: {
        title: 'Events: TEDxGeorge',
    },
}


async function Events(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={Style.header}>
                       Events
                    </h1>

                    <p className={clsx(Utils.fs_2, "fw-light")}>
                        TEDxGeorge embodies the essence of TED's mission: spreading ideas worth sharing. Our program aims to cultivate meaningful conversations within our community by providing TED-like experiences at the grassroots level.
                    </p>

                    <p>As a local iteration of this global movement, TEDxGeorge serves as a platform for inquisitive and forward-thinking individuals in the George area. We are a collective of thinkers and doers who are passionate about discovering and honoring local ideas across various disciplines and sharing them with the wider world.</p>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row">
                    {eventsList.map((event) => <EventItem key={event.slug} event={event} />)}
                </div>
            </section>

            <MainEvent />
        </>
    )
}

export default Events;