import sortBy from "@/lib/utils/sortBy"
import { useMemo } from "react"
import { speakerList } from "@/lib/speakerList"


export default function useSpeakerTalks({ limit = null, sort = "last_name" }){ 
    const speakers = sortBy(Object.values(speakerList), sort)

    const talks = useMemo(() => {
        return speakers.map((speaker, index) => {
            if( !Array.isArray(speaker.talks) || !speaker.talks.length ) return null

            if( limit && (index+1) > limit ) return null

            return speaker.talks.map((talk) => {
                return {
                    ...talk,
                    speaker: {
                        name: speaker.first_name + " " + speaker.last_name,
                        slug: speaker.slug
                    }
                }
            })
            
        }).flat().filter(Boolean)

    }, [ speakers ])

    return{
        talks
    }
}