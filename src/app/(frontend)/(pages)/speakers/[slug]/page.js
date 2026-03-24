import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import Image from "next/image"
import { speakerList } from "@/lib/speakerList"
import { IconLink } from "@/icons/IconLink"
import TalkCard from "@/components/speakers/TalkCard"


async function SpeakerDetails({ params }){
    const { slug } = await params
    const speaker = speakerList[slug];
    const speakerName = `${speaker?.first_name} ${speaker?.last_name}`

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <p className={clsx(Utils.fs_5, "fw-light")}>
                        {speaker?.event} Speaker
                    </p>

                    <article>
                        <h1 className={Style.header}>
                            {speakerName}
                        </h1>

                        {(speaker?.social && Object.keys(speaker?.social).length > 0) ? (
                            <ul className={Style.speakerSocials}>
                                {Object.keys(speaker?.social).map((social) => {
                                    if(!speaker?.social[social]) return null;

                                    return(
                                        <li key={social}>
                                            <a href={speaker?.social[social]} target="_blank" className={Style.socialLink}>
                                                <IconLink className={Style.linkIcon} width="20" height="20" />
                                                {speakerName}'s {social}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        ):null}

                    </article>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <article 
                        className="col-lg-8 col-12 pe-5" 
                        dangerouslySetInnerHTML={{ __html: speaker?.bio ?? "" }} 
                    />

                    <figure className="col-lg-4 col-12">
                        <Image
                            src={speaker?.image?.src ?? "https://dummyimage.com/400x400/111/fff&text=Announcing+Soon"}
                            width={400}
                            height={400}
                            alt={speakerName ?? "TEDx George Speaker"}
                            placeholder="blur"
                            blurDataURL={speaker?.image?.blurDataURL ?? "https://dummyimage.com/1x1/111/fff&text=Announcing+Soon"}
                        />
                    </figure>
                </div>

                {(Array.isArray(speaker?.talks) && speaker?.talks.length) ? (
                    <>
                        <hr className="my-5" />

                        <h2 className={Utils.fs_2}>
                            {speakerName}'s TEDx Talks
                        </h2>

                        <div className="row">
                            {speaker?.talks.map((talk, index) => {
                                return(
                                    <TalkCard
                                        key={index}
                                        {...{ talk }}
                                    />
                                )
                            })}
                        </div>
                    </>
                ):null}
                
            </section>
        </>
    )
}


export default SpeakerDetails;



export async function generateMetadata({ params }){
    const { slug } = await params
    const speaker = speakerList[slug];

    // return{
    //     title: speaker?.name,
    //     alternates: {
    //         canonical: "https://tedxgeorge.com/speakers/" + speaker?.slug,
    //     },
    //     // description: speaker.bio.replace(/(<([^>]+)>)/ig, '').substring(0, 120),
    //     openGraph: {
    //         title: speaker?.name,
    //         url: "https://tedxgeorge.com/speaker/" + speaker?.slug,
    //         siteName: 'TEDxGeorge',
    //         locale: 'en_US',
    //         type: 'website',
    //         images: [
    //             {
    //                 url: speaker?.image.src,
    //                 width: 400,
    //                 height: 400,
    //             },
    //         ],
    //     }
    // }
}