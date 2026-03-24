import Loader from "@/components/feedback/Loader";


function ButtonFeedback({ loading, success, err, children }){
    return(
        <>
            {(loading || success || err) ? 
                <Loader 
                    isLoading={loading} 
                    isSuccessful={success} 
                    hasError={err} 
                /> 
            : 
                <>{children}</>
            }
        </>
    )
}

export default ButtonFeedback;