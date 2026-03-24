import { useEffect, useState } from "react"

export default function useButtonFeedback(){
    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [ err, setError ] = useState(false)


    useEffect(() => {
        if( err ){
            setTimeout(() => {
                setError(false)
            }, 3000)
        }

        if( success ){
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }

    }, [ err, success ])

    return{
        loading,
        success,
        err,
        setLoading,
        setSuccess,
        setError
    }
}