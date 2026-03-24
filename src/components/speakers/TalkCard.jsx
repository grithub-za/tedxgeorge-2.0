import Image from "next/image";
import Style from "./Speaker.module.scss"
import Link from "next/link";


function TalkCard({ talk }){
    const videoId = talk?.video.split("v=")[1]
    const videoThumb = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`

    return(
        <>               
            <article className="col-6 col-lg-4 mb-5">
                <figure className={Style.talkThumb}>
                    <a href={talk?.video} target="_blank" rel="noreferrer">
                        <Image 
                            src={videoThumb} 
                            width={480} 
                            height={360} 
                            alt={talk?.title} 
                            className={Style.talkImage}
                        />
                    </a>

                    <figcaption className={Style.talkCaption}>
                        <a href={talk?.video} target="_blank" rel="noreferrer">
                            <strong className={Style.talkTitle}>
                                {talk?.title}
                            </strong>
                        </a>
                        
                        <cite className={Style.talkSpeaker}>
                            <Link href={`/speakers/${talk?.speaker?.slug}`}>
                                {talk?.speaker?.name}
                            </Link>
                        </cite>

                        <small>
                            Posted: {talk?.date}
                        </small>
                    </figcaption>
                </figure>
            </article>                        
        </>
    )
}

export default TalkCard;