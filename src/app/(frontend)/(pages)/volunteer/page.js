import Style from "@/app/(pages)/Page.module.scss"
import Utils from "@/styles/globals/utils.module.scss"
import clsx from "clsx"


export const metadata = {
    title: "Volunteer",
    alternates: {
        canonical: "https://tedxgeorge.com/volunteer",
    },
    openGraph: {
		title: 'Volunteer : TEDxGeorge',
    }
}

function Volunteer(){
    return(
        <section className="container d-flex flex-column justify-content-center">
            <div className={clsx(Style.heading, "text-center")}>
                <h1 className={Style.header}>
                    Get Involved 👋
                </h1>

                <p className={clsx(Utils.fs_2, "fw-light")}>
                    TEDxGeorge is more than just an event - it's a movement of ideas worth spreading. 
                </p>

                <p>
                    Our volunteers are the heartbeat of this experience, helping us bring together speakers, attendees, and thought leaders for a day of inspiration and connection. If you're passionate about creativity, innovation, and community, we'd love to have you on board!
                </p>

                <p>
                    <a href="https://forms.gle/BdHo37zuASpTBq6r6" target="_blank" className="btn btn-danger fs-1 px-5">
                        Sign up to volunteer &nbsp;
                        <svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={40} fill="#ffffff"> 
                            <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                        </svg>
                    </a>
                </p>
            </div>
        


            <hr className="my-5" />

            <div className="row">
                <header className="col-lg-4 col-12 pe-5">
                    <h2 className={Utils.fs_1}>Why Volunteer?</h2>
                </header>
                
                <article className="col-lg-8 col-12 ps-5">
                    <ul className="m-0">
                        <li className="mb-4">Gain Valuable Experience – Develop skills in event production, marketing, logistics, and more.</li>
                        <li className="mb-4">Network with Innovators – Meet like-minded individuals, speakers, and changemakers.</li>
                        <li className="mb-4">Be Part of a Global Movement – TEDx events take place worldwide, and you'll contribute to a legacy of impact.</li>
                        <li>Have Fun & Make a Difference – Play a key role in bringing TEDxGeorge to life!</li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Volunteer