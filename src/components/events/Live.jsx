
import liveImg from "@/public/TEDx_Logo_George_live_white.png"
import Image from "next/image"
import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"


function Live(){
    return(
        <>
            <hr className="my-5" />

            <div className="row">
                <header className="col-lg-4 col-12 pe-5">
                    <Image 
                        {...liveImg} 
                        alt="TEDxGeorge Live" 
                        width="500" 
                        height="62" 
                        className={Style.salonImg}
                         
                    />
                    
                    <small>A TEDx Live event brings the excitement and inspiration of a global TED conference directly to our local community. At TEDxGeorge Live, we will stream a live feed of the upcoming TEDNext 2024 event, allowing our audience to experience TED talks in real time, alongside thousands of viewers worldwide.</small>                       
                </header>
                
                <article className="col-lg-8 col-12 ps-5">
                    <h2 className={Utils.fs_2}>
                        More about TEDx George Live:
                    </h2>

                    <p>While a traditional TEDx event features local speakers, a TEDx Live event gives you access to world-class talks and performances from a TED conference without leaving George. You'll get to engage with the groundbreaking ideas, innovations, and discussions happening on the TED stage, right here in our community.</p>

                    <p>This isn't just passive viewing! Attendees can participate in discussions, network, and connect with other local thinkers and innovators, making the experience both global and locally impactful.</p>

                    <p>Join us at TEDxGeorge Live and be part of the global TED experience!</p>
                </article>
            </div>
        </>
    )
}

export default Live;