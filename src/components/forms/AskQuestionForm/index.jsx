"use client"
import clsx from "clsx";
import Loader from "components/feedback/Loader"
import { useForm, Controller } from "react-hook-form";
import Textarea from "components/forms/Textarea";
import Button from "components/forms/Button";
import Input from "components/forms/Input";
import { CreateQuestion } from 'thirdparty/Yotpo/YotpoContext';
import { useState } from "react";
import Utils from "@/styles/globals/utils.module.scss"
import { useRouter } from "next/navigation";
import useCallTracking from 'thirdparty/CallTracking/useCallTracking';

function AskQuestionForm({ product }){
    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [ err, setError ] = useState(false)
    const router = useRouter()

    const callRailPh = useCallTracking();



    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            display_name: "",
            email: "",
            review_content: "",
        }
    });

    const postForm = (formData) => {
        setLoading(true)

        const body = {
            ...formData,
            appkey: process.env.NEXT_PUBLIC_yotpo_key,
            sku: product.product_id.toString(),
            product_title: product.name,
            product_url: process.env.NEXT_PUBLIC_siteUrl +"/"+ product.product_uri,
            product_image_url: product.images[0]?.image_url,
            product_description: product.meta_description,
            prevent_duplicate_review: true
        }

        CreateQuestion(body).then(async (response) => {
            setLoading(false)            
            
            if( response.status === 200 ){
                setSuccess(true)

                const reactToast = await import("react-toastify");
                reactToast.toast(`Thanks! We received your question and will respond to you shortly.`)
                
                setTimeout(() => {
                    setLoading(false)
                    setSuccess(false)

                    // return the user back to the PDP
                    router.push(`/${product.product_uri}`)
                    
                }, 3000)

            }else{
                const reactToast = await import("react-toastify");
                reactToast.toast.error(`Something went wrong. Code: ${response.status}`)
            }

        }).catch(err => {
            setLoading(false)
            setError(true)

            setTimeout(() => {
                setLoading(false)
                setError(false)
            }, 3000)
        })
           
        
    }



    return(
        <form onSubmit={handleSubmit(postForm)}>
            <fieldset>
                <legend>
                    <strong className={clsx(Utils.fs_1, Utils.mb_1, Utils.d_block)}>
                        Ask A question
                    </strong>
                    <span className={clsx(Utils.fs_5)}>
                        Questions about our <strong>{product.name}</strong>?
                    </span>
                    <p><small>*Required Fields</small></p>
                </legend>

                <div className={clsx(Utils.d_flex, Utils.mt_6, Utils.flex_column, Utils.flex_md_row)}>
                    <div className={clsx(Utils.pe_2, Utils.w_100)}>
                        <Controller
                            name="display_name"
                            control={control}
                            render={({ field }) => (
                                <Input 
                                    {...field} 
                                    required
                                    autoFocus
                                    label="Your Display Name*" 
                                    helpText="Please do not use your own name, spaces or special characters."
                                />
                            )}
                        />
                    </div>

                    <div className={Utils.w_100}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field} 
                                    type="email"
                                    required
                                    label="Your Email Address*"
                                    helpText="Your email will not be displayed publicly, sold nor used for SPAM.  Your email will allow for us to send notifications."
                                />
                            )}
                        />
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <div className={Utils.my_4}>
                    <Controller
                        name="review_content"
                        control={control}
                        render={({ field }) => (
                            <Textarea 
                                {...field} 
                                required
                                label="Your Question*"
                            />
                        )}
                    />
                </div>


                <div className={Utils.mb_4}>
                    <h4 className={Utils.fs_4}>Question Guidelines</h4>
                    <ol className={clsx(Utils.ps_2, Utils.m_0)}>
                        <li>Ask about the product, it's features and functionality.</li>
                        <li>Please contact us directly at <a href={`tel:${callRailPh}`}>{callRailPh}</a> to ask about delivery, availability and customer service issues.</li>
                    </ol>
                </div>

                <>
                    <Button type="submit" color="ocean">
                        {loading ? 
                            <Loader 
                                isLoading={loading} 
                                isSuccessful={success} 
                                hasError={err} 
                            /> 
                        : 
                            `Submit Question`
                        }
                    </Button>

                    <Button 
                        color="transparent" 
                        type="button"
                        className={Utils.ms_2} 
                        onClick={() => router.push(`/${product.product_uri}`)} 
                        noAnimate
                    >
                        Cancel
                    </Button>
                </>
            </fieldset>


        </form>
    )
}

export default AskQuestionForm;