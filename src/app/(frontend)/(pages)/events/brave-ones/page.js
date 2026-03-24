import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { MainEvent } from "@/components/JSONld"
import hero from "@/public/about-hero.jpg"
import mobileHero from "@/public/background-mobile.jpg"
import Image from "next/image"
import braveOnes from "@/public/The_Brave_Ones.png"
import { speakerList } from "@/lib/speakerList"
import sortBy from "@/lib/utils/sortBy"
import SpeakerCard from "@/components/speakers/SpeakerCard"

export const dynamic = 'force-static'


export const metadata = {
    title: "Brave Ones",
    alternates: {
        canonical: "https://tedxgeorge.com/events/brave-ones",
    },
    openGraph: {
		title: 'Brave Ones - 2024 : TEDxGeorge',
    }
}


function BraveOnes(){
    const speakers = sortBy(Object.values(speakerList), "last_name")
        .filter((speaker) => speaker.active.some((activeYear) => activeYear === 2024));


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

                <div className={Style.heroInner}>
                    <div className={Style.heroSpacer} />

                    <div className={Style.heroText}>
                        <Image 
                            {...braveOnes} 
                            className={Style.eventLogo}
                            alt="the brave ones"
                             
                        />
                        
                        <p className={clsx(Utils.fs_3, Utils.mb_1)}>
                            October 5, 2024 &nbsp;&nbsp;|&nbsp;&nbsp; George Arts Theater
                        </p>

                        <p className={clsx(Utils.fs_5, Utils.mb_2)}>
                            An inspirational one day event propelling you to be challenged at every level.
                        </p>
                    </div>
                </div>
			</section>



            <section className="container text-center d-flex justify-content-center mt-5 pt-5">
                <div className={Style.heading}>
                    <h2 className={clsx(Utils.fs_5, "fw-light")}>
                        About TEDxGeorge - The Brave Ones
                    </h2>

                    <article>
                        <p className={Utils.fs_3}><strong>“The Brave Ones”</strong> is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields. These individuals may not be the most recognised and acknowledged, but <strong>the impact and weight of their ideas are the centre of our attention.</strong></p>
                        <p>By creating an environment that allows them to offer us insight into their history, activities, and future aspirations through their ideas – we hope to further inspire and empower other individuals to seek their highest potential – regardless of the internal and external challenges that one continuously faces.</p>
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


            <section className="container">
                
                <hr className="my-5" />

                <div className="row">
                    <header className="col-lg-4 col-12">
                        <h2 className={Utils.fs_2}>
                            TEDx, x = independently organized event
                        </h2>
                    </header>

                    <article className="col-lg-8 col-12">
                        <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
                    </article>
                </div>
                    
            </section>

            <MainEvent />
        </>
    )
}

export default BraveOnes;