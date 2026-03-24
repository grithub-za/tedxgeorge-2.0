import Style from "@/app/(pages)/Page.module.scss"
import TalkCard from "@/components/speakers/TalkCard"
import useSpeakerTalks from "@/custom_hooks/useSpeakerTalks"



export const metadata = {
    title: "Talks",
    alternates: {
        canonical: "https://tedxgeorge.com/speakers/talks",
    },
    openGraph: {
		title: 'Talks : TEDxGeorge',
    }
}

function SpeakerTalks(){
    const { talks } = useSpeakerTalks({ limit: null })
    
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={Style.header}>
                        Talks
                    </h1>
                </div>
            </section>

            <section className="container mb-5">                
                <div className="row mt-4">
                    {talks.map((talk) => {
                        return (
                            <TalkCard 
                                key={talk?.title} 
                                {...{ talk }}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default SpeakerTalks;