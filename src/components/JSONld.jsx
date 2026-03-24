import Script from "next/script";



function MainEvent(){
    return(
        <Script type="application/ld+json">
            {`
                {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "TEDxGeorge",
                    "startDate": "2024-10-05T09:00:00+02:00",
                    "endDate": "2024-10-05T16:00:00+2:00",
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                    "eventStatus": "https://schema.org/EventScheduled",
                    "location": {
                        "@type": "Place",
                        "name": "George Arts Theater",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "125 York St",
                            "addressLocality": "George",
                            "postalCode": "6529",
                            "addressRegion": "WC",
                            "addressCountry": "ZA"
                        }
                    },
                    "image": [
                        "https://www.tedxgeorge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrave-ones-event.f4947adf.jpg&w=828&q=75",
                    ],
                    "description": "The Brave Ones is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields. These individuals may not be the most recognised and acknowledged, but the impact and weight of their ideas are the centre of our attention. ",
                    "offers": {
                        "@type": "Offer",
                        "url": "https://www.tedxgeorge.com/events",
                        "price": "250",
                        "priceCurrency": "ZAR",
                        "availability": "https://schema.org/InStock",
                        "validFrom": "2024-05-21T12:00:00+2:00"
                    },
                    "organizer": {
                        "@type": "Organization",
                        "name": "TEDxGeorge",
                        "url": "https://www.tedxgeorge.com/"
                    }
                }
            `}
        </Script>
    )
}


export{
    MainEvent
}