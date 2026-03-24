import Utils from "@/styles/globals/utils.module.scss"
import clsx from "clsx"
import { sponsorList } from "@/lib/sponsorList"
import Image from "next/image"
import Style from "@/app/(pages)/Page.module.scss"

export const dynamic = 'force-static'

export const metadata = {
    title: "Partners",
    alternates: {
        canonical: "https://tedxgeorge.com/partners",
    },
    openGraph: {
		title: 'Partners : TEDxGeorge',
    }
}


function Partners(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={Style.header}>
                        Partners
                    </h1>

                    <p className={clsx(Utils.fs_2, "fw-light")}>
                        We in the TEDx Community view our sponsors as partners who are joining us on a journey. This is a project that we're investing in together. 
                    </p>
                </div>
            </section>


                 
            <section className="container">
                {Object.keys(sponsorList).map((sponsorLevel) => {
                    const sponsor = sponsorList[sponsorLevel]

                    if(sponsor.length === 0) return null

                    return(
                        <div className="row mt-5" key={sponsorLevel}>
                            <hr className={Utils.my_2} />

                            <header className="col-lg-3 col-12">
                                <h2 className={Style.sponsorHeading}>
                                    {sponsorLevel} Partners
                                </h2>
                            </header>
                                
                            <article className="col-lg-9 col-12">
                                <ul className={Style.sponsorList}>
                                    {sponsor.map((sponsor) => {
                                        return(
                                            <li 
                                                key={sponsor.name} 
                                                className={Style.sponsorItem}
                                            >
                                                <a href={sponsor.url} target="_blank" rel="noreferrer">
                                                    <Image 
                                                        width={500}
                                                        height={400}
                                                        src={sponsor.logo} 
                                                        alt={sponsor.name} 
                                                         
                                                        className={clsx(Style.sponsorImg, Style[`sponsorImg__${sponsorLevel}`])} 
                                                    />
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                        </div>
                    )
                })}  
            </section>


            <section className="container">
                <hr className={Utils.my_6} />

                <p className={clsx(Utils.fs_3, Utils.text_center, Utils.mb_4)}>
                    When partnering with TEDxGeorge there are three core principles to keep in mind:
                </p>

                <div className="row">
                    <article className="col-lg-4 col-12 p-4">
                        <h2 className={clsx(Utils.fs_2, Utils.mb_1)}>
                            1. Collaborate With Us
                        </h2>
                        <p>As a sponsor we are engaging each other in a collaborative relationship to be part of something meaningful, TEDxGeorge.</p>
                    </article>
                

                    <article className="col-lg-4 col-12 p-4">
                        <h2 className={clsx(Utils.fs_2, Utils.mb_1)}>
                            2. Provide Authentic Dialogue
                        </h2>
                        <p>You are a partner who we want to have an authentic dialogue with our TED/TEDx community.</p>
                    </article>
               
                
                    <article className="col-lg-4 col-12 p-4">
                        <h2 className={clsx(Utils.fs_2, Utils.mb_1)}>
                            3. Think Big, Dream Big
                        </h2>
                        <p>We encourage you as a partner to be as creative as possible and dream up interesting and value-adding ways to reach their/your audience.</p>
                    </article>
                </div>
            </section>


            <section className="container mb-5">
                <hr className="my-5" />

                <div className="row">
                    <header className="col-lg-4 col-12">
                        <h2 className={Utils.fs_2}>
                            Sponsorship Add-on Activities
                        </h2>
                    </header>

                    <article className="col-lg-8 col-12">
                        <p>Imagine a gathering where the air buzzes with excitement, where ideas crackle and spark, and where the boundaries of possibility are pushed to their limits. That's the vision we have for our upcoming event, TEDxGeorge 2024, where we celebrate "The Brave Ones" – individuals who defy the status quo and fearlessly shape the future. Anticipated benefits for you include:</p>
                        <ul className="ms-0">
                            <li>A chance to launch a new product</li>
                            <li>Networking opportunities</li>
                            <li>Showcasing a project</li>
                            <li>Entertainment and marketing to guests</li>
                        </ul>
                    </article>
                </div>
            </section>


            <section className={clsx("container", Utils.mb_8)}>
                <hr className={Utils.my_6} />

                <article className="text-center d-flex flex-column align-items-center">
                    <h3 className={Utils.fs_1}>
                        In-Kind Donations
                    </h3>

                    <p className="w-75 fs-1">
                        For information on how to support TEDxGeorge through in-kind donations of products or services, email <a href="mailto:info@tedxgeorge.com">info@tedxgeorge.com</a>
                    </p>
                </article>


                <hr className={Utils.my_6} />

                <article className="text-center d-flex flex-column align-items-center">
                    <h3 className={Utils.fs_1}>
                        Ready to get started?
                    </h3>

                    <p>
                        <a href="/TEDxGeorge_Sponsors_Welcome_Guide.pdf" download={true} className="btn btn-danger fs-1 px-5">
                            Download Sponsorship Guide
                        </a>
                    </p>
                </article>
            </section>
        </>
    )
}

export default Partners;