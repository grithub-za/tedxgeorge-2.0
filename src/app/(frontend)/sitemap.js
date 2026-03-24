import { eventsList } from "@/lib/eventList"
import { speakerList } from "@/lib/speakerList"



export default async function sitemap() {
    const events = eventsList.map((event) => {
        return {
            url: `https://tedxgeorge.com/events/${event.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }
    })

    const speakers = Object.keys(speakerList).map((slug) => {
        return {
            url: `https://tedxgeorge.com/speakers/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    })


    return[
        {
            url: 'https://tedxgeorge.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/about",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/about/our-team",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/volunteer",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/press",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/speakers/talks",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/speakers/nominate",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/events",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/speakers",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/partners",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...events,
        ...speakers,
    ]
}