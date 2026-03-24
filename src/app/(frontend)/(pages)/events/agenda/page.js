import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { agenda } from "@/lib/agenda";
import React from "react";
import Image from "next/image";

export const dynamic = 'force-static'

export const metadata = {
    title: "Schedule",
    description: "Explore the schedule for TEDxGeorge 2025, featuring inspiring talks and engaging sessions."
}

function EventAgenda(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_1)}>
                       Your Schedule
                    </h1>
                </div>
            </section>
        
            <section className="container d-flex flex-column align-items-center">
                {agenda.map(item => {
                    return(
                        <div className="col-lg-10 col-12" key={item.title}>
                            <div className="row px-4 mt-5 pb-5">
                                <time className="col-lg-3 col-12">
                                    {item.start} - {item.end} CAT
                                </time>

                               
                                <article className="col-lg-6 col-12">
                                    <h2 className={clsx(Utils.fs_2)}>
                                        <strong>{item?.title}</strong>
                                    </h2>

                                    <p>
                                        {item.description}
                                    </p>
                                </article>

                                <figure className="col-lg-3 col-12">
                                    <Image 
                                        width={300}
                                        height={200}
                                        src={item?.image ?? "/default-image.jpg"}
                                        alt={item?.title}
                                        className={clsx("img-fluid", "w-100")}
                                    />
                                </figure>


                                {/* {item.speakers && (
                                    <aside className="row g-4 mt-0">
                                        {item.speakers.map(speaker => {
                                            return(
                                                <div className="col-lg-4 col-6" key={speaker?.slug}>
                                                    <p className={Style.speakerBox}>
                                                        <strong>{speaker?.first_name} {speaker?.last_name}</strong><br/>
                                                        <small>{speaker?.organization}</small>
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </aside>
                                )} */}
                            </div>

                            <hr className="my-5" />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default EventAgenda;