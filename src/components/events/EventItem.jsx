import Link from "next/link"
import Image from "next/image"
import Utils from "@/styles/globals/utils.module.scss"
import clsx from "clsx"



function EventItem({ event }){
    return(
        <Link 
            href={event?.href}
            title={`More on ${event?.title}`}
            className={clsx("col-12 col-lg-3 border-0 mb-5 p-2")} 
            key={event?.title}
        >
            <Image 
                src={event?.src}
                alt={event?.title}
                width={400} 
                height={400} 
                placeholder="blur"
                blurDataURL={event?.blurDataURL ?? "https://dummyimage.com/1x1/777/fff"}
                className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
            />

            <div className="btn btn-danger btn-lg mt-3">
                Read more &rarr;
            </div>
        </Link>
    )
}

export default EventItem;