import clsx from "clsx";
import Style from "@/app/(pages)/Page.module.scss"
import Utils from "@/styles/globals/utils.module.scss"
import { teamList } from "@/lib/teamList";
import Image from "next/image";
import sortBy from "@/lib/utils/sortBy";

export const dynamic = 'force-static'

export const metadata = {
    title: "Our Team",
    alternates: {
        canonical: "https://www.tedxgeorge.com/about/our-team",
    },
    openGraph: {
		title: 'Our Team : TEDxGeorge',
    }
}


function OurTeam(){
    const team = sortBy(teamList, "name")

    return(
        <>
             <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={Style.header}>
                        Our Team
                    </h1>

                    <p className={clsx(Utils.fs_2, "fw-light")}>
                        Change-Makers & Mould-Breakers
                    </p>
                    <p>
                        TEDxGeorge is driven by a diverse and dedicated team of volunteers who are passionate about fostering dialogue, sharing ideas, and creating positive change in our community. Our team members come from various backgrounds and disciplines, bringing unique perspectives and skills to the table. Together, we work tirelessly to curate engaging events, support inspiring speakers, and connect with our audience to spark meaningful conversations. Meet the faces behind TEDxGeorge and learn more about the individuals who are shaping our TEDx community.
                    </p>
                </div>
            </section>


            <section className="container mb-5">
                <div className="row mt-4">
                    {team.map((member) => {
                        return(
                            <figure className="col-6 col-lg-3 mb-5" key={member.name}>
                                <Image 
                                    {...member.photo}
                                    alt={member.name} 
                                    width={400} 
                                    height={400} 
                                    placeholder="blur"
                                     
                                    className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                                />

                                <figcaption className={clsx(Utils.mt_1, Utils.pb_4)}>
                                    <h2 className={clsx(Utils.fs_2, Utils.mb_0)}>
                                        {member.name}
                                    </h2>
                                    <small>
                                        {member.role}
                                    </small>
                                </figcaption>
                            </figure>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default OurTeam;