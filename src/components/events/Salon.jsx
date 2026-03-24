import salonImg from "@/public/TEDx_Logo_George_Salon.png"
import Image from "next/image"
import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"


function Salon(){
    return(
        <>
            <hr className="my-5" />

            <div className="row">
                <header className="col-lg-4 col-12 pe-5">
                    <Image 
                        {...salonImg} 
                        alt="TEDxGeorge Salon" 
                        width="500" 
                        height="62" 
                        className={Style.salonImg}
                         
                    />
                    
                    <small>Salon events are small events that keeps our TEDxGeorge community engaged between regular TEDx events. It's a unique kind of gathering that TEDx we hold which allows the conversation to continue, up close and in person.</small>                       
                </header>
                
                <article className="col-lg-8 col-12 ps-5">
                    <h2 className={Utils.fs_2}>
                        Three reasons why you'll love TEDx salons:
                    </h2>

                    <ol className="m-0">
                        <li className="mb-4"><strong>The discussion:</strong> A critical element of salon is lively discussions, allowing attendees to actively participate in the event. With much smaller audiences than a standard TEDx event, salons bring attendees together in more intimate spaces, and with more chances to get know and exchange ideas as with each other.</li>
                        <li className="mb-4"><strong>The single subject:</strong> Having the ability to focus on only one subject creates focused audience and atmosphere.</li>
                        <li><strong>Frequency:</strong> TEDxGeorge Salons are recurring events that offer a way stay engaged with the latest ideas. Salons can happen between larger standard events, providing a regular touch point for you and TEDxGeorge.</li>
                    </ol>
                </article>
            </div>
        </>
    )
}

export default Salon;