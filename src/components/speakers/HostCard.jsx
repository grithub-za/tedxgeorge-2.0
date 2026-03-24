import Image from "next/image"
import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import Link from "next/link"


function HostCard({ first_name, last_name, organization, slug, topic, image, theme, bio }){
    const ContainerElement = bio ? Link : "article";

    return(
        <ContainerElement 
            className={clsx(Style.speakerLink, "col-6 col-lg-3")}
            href={`/speakers/${slug}`} title={`${first_name} ${last_name} TEDx George Profile`}
        >
            <figure className="mb-3" key={slug}>
                <Image 
                    src={image?.src ?? "https://dummyimage.com/400x400/111/fff&text=Announcing+Soon"}
                    blurDataURL={image?.blurDataURL ?? "https://dummyimage.com/1x1/111/fff&text=Announcing+Soon"}
                    placeholder="blur"
                    alt={`${first_name} ${last_name}`}
                    width={400} 
                    height={400} 
                    className={clsx(Utils.w_100, Utils.mb_1, Utils.h_auto, "object-fit-contain")}
                />

                <figcaption className={Utils.px_1}>
                    <h2 className={clsx(Utils.fs_5, Utils.mb_0)}>
                        <strong>{first_name} {last_name}</strong>
                    </h2>

                    <small>{organization}</small> 
                </figcaption>
            </figure>
        </ContainerElement>
    )
}

export default HostCard