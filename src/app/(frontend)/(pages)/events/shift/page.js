import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import Image from "next/image";
import hero from "@/public/quicket-shift-tedx.png"
import mobileHero from "@/public/shift-concept-design.png"
import clsx from "clsx";
import { speakerList } from "@/lib/speakerList"
import sortBy from "@/lib/utils/sortBy"
import SpeakerCard from "@/components/speakers/SpeakerCard"
import HostCard from "@/components/speakers/HostCard"


export const metadata = {
    title: "Shift",
    alternates: {
        canonical: "https://tedxgeorge.com/events/shift",
    },
    openGraph: {
		title: 'Shift - 2025 : TEDxGeorge',
    }
}



async function Shift(){    
    const speakers = sortBy(Object.values(speakerList), "last_name")
        .filter((speaker) => speaker.active.some((activeYear) => activeYear === 2025));

    const hosts = sortBy(Object.values(speakerList), "last_name")
        .filter((speaker) =>  speaker?.presenter && speaker.presenter.some((presenterYear) => presenterYear === 2025));
        

    return(
        <>
            <section className={Style.hero}>
				<picture className={Style.heroImg}>
					<source srcSet={hero.src} type="image/webp" media="(min-width: 600px)"/>
					<source srcSet={mobileHero.src} type="image/webp" media="(max-width: 600px)" />

					<Image 
						src={hero.src} 
						alt="TEDxGeorge Hero" 
						layout="responsive"
						width={1920}
						height={1080}
                         
					/>
				</picture>
			</section>

            

            <section className="container text-center d-flex justify-content-center mt-5 pt-5">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Shift 2025 &nbsp;&nbsp;|&nbsp;&nbsp; October 11, 2025 &nbsp;&nbsp;|&nbsp;&nbsp; George Arts Theater
                    </h1>

                    <article>
                        <p className={clsx(Utils.fs_3, Utils.mb_2)}>
                            In a world of AI hallucinations, political instability, climate extremes, and digital fatigue, there's a feeling that something isn't right. That instinct is the glitch. And the glitch, if followed, becomes the SHIFT.
                        </p>

                        <p>This year, the TEDxGeorge stage becomes a signal amplifier—a place where unseen disruptors are decoded and glitches become movements. We invite speakers, performers, and storytellers who are not only noticing the cracks in the system but using them as pathways for new thinking.</p>
                    </article>
                </div>
            </section>

            <section className="container mb-5">                
                <div className="row mt-4">
                    {speakers.map((speaker) => {
                        return <SpeakerCard {...speaker} key={speaker?.slug} />
                    })}
                </div>
            </section>


            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h2 className={Style.header}>
                        Session Hosts
                    </h2>
                </div>
            </section>

            <section className="container mb-5">                
                <div className="row mt-4">
                    {hosts.map((host) => {
                        return <HostCard {...host} key={host?.slug} />
                    })}
                </div>
            </section>


            
        </>
    )
}

export default Shift;