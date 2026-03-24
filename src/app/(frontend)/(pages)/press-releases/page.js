import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx";
import press from "@/public/tedxgeorge-press.jpg"

export const dynamic = 'force-static'

export const metadata = {
    title: "Press Releases",
    alternates: {
        canonical: "https://tedxgeorge.com/press-releases",
    },
    openGraph: {
        title: 'TEDxGeorge Press Releases',
        url: 'https://tedxgeorge.com/press-releases',
        siteName: 'TEDxGeorge',
        images: [
            {
                url: press.src,
                width: 800,
                height: 800,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}


function PressReleases(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_1, "fw-light")}>
                        Press Releases
                    </h1>
                </div>
            </section>

            <section className="container">
                <hr className="my-5" />

                <div className="row">
                    <header className="col-lg-4 col-12 pe-5">
                        <h2 className={clsx(Utils.fs_2, "mb-4")}>
                            Introducing TEDxGeorge: The Brave Ones | The first TEDx event in George!
                        </h2>

                        <p>
							July 25, 2024
						</p>
                    </header>
                    
                    <article className="col-lg-8 col-12">
                        <p>TEDxGeorge is proud to announce its inaugural event, bringing together the brightest minds and innovators to share ideas that have the power to shape the future. Scheduled to take place on 05 October 2024 - from 9AM at the Dotsure George Arts Theatre This event marks the beginning of an annual tradition where thinkers and doers converge to explore a wide array of topics spanning technology, entertainment, design, science, humanities, business, and development.</p>
                        <p>Themed “The Brave Ones” - this is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields. These individuals may not be the most recognised and acknowledged, but the impact and weight of their efforts is the centre of our attention.</p>
                        <p>By creating an environment that allows them to offer us insight into their history, activities, and future aspirations = we hope to further inspire and empower other individuals to seek their highest potential - regardless of the internal and external challenges that one continuously faces.</p>
                        <p>TED (Technology, Entertainment, Design) has long been synonymous with ground-breaking ideas and inspirational talks. In the spirit of "ideas worth spreading," TEDxGeorge has emerged as a local platform, part of the global TEDx program, where individuals can come together to share transformative ideas.</p>
                        <p>As a lead-up to our main event, we'll be hosting a series of “Salon” events—smaller, more intimate gatherings that focus on key topics in a less formal setting. These events are free and open to the public, providing a great opportunity to build our TEDx community and place engagement, idea-sharing, and empowerment at the forefront. Over the next few months, we'll be hosting these events at various locations across the city. Be sure to follow our social media pages and visit our website to stay updated on the schedule and details.</p>
                        <p>At TEDxGeorge, attendees will have the opportunity to experience a blend of TED Talks, live speakers and form part of an interactive community - fostering deep discussions and connections within our community.</p>
                        <p>These talks will not only entertain and inspire but also provoke thought and encourage action. By leveraging the TEDx platform, we aim to create a dynamic and engaging event that enriches the lives of our audience members and sparks positive change in our community and beyond. Join us as we embark on this extraordinary journey of exploration, enlightenment, and collaboration.</p>
                        <p>Together, let's ignite the flame of inspiration and celebrate the limitless potential of human creativity.</p>
                        <p>The event will be held on October 5, from 9 AM to 5 PM at the Dotsure George Arts Theate (125 York St, George Central, George, 6529). Our speakers will delve into a wide range of topics, spanning from jazz and artificial intelligence to affordable healthcare, diversity, and beyond. Official information regarding ticket sales is available via our website - tedxgeorge.com For more information about TEDxGeorge and how you can get involved, please visit our website - or follow us on social media (@tedxgeorge) on Facebook and Instagram.</p>
                        <p>TED is a non-profit, nonpartisan organisation dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community. TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.</p>
                        <p>Follow us to stay up to date!</p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default PressReleases;