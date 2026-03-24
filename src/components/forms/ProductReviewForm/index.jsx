"use client"

import { CreateReview } from 'thirdparty/Yotpo/YotpoContext';
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import Loader from "components/feedback/Loader"
import RatingsWidget from "components/forms/RatingsWidget";
import Textarea from "components/forms/Textarea";
import Switch from "components/forms/Switch";
import Button from "components/forms/Button";
import Input from "components/forms/Input";
// import ImageUpload from '../ImageUpload';
// import Col from 'styles/globals/gridutils.module.scss';
import Utils from "@/styles/globals/utils.module.scss"
import { useRouter } from 'next/navigation';
// import { s3FilesUpload } from 'thirdparty/Amazon/s3';
import useCallTracking from 'thirdparty/CallTracking/useCallTracking';


function ProductReviewForm({ product }){
    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [err, setError] = useState(false)
    const [imageUrls, setImageUrls] = useState([])


    const router = useRouter();

    const callRailPh = useCallTracking();


    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            time_stamp: Date.now(),
            display_name: "",
            email: "",
            review_score: "",
            review_title: "",
            review_content: "",
            ["--33401"]: "",
            reviewer_type: "verified_reviewer"
        }
    });



    const getUploadedImages = (imageFiles) => { 

         setImageUrls([...imageFiles]);
    }

    const postForm = async (formData) => {

        setLoading(true)
        const { createHash } = require('crypto');
        const signature_secret = `${process.env.NEXT_PUBLIC_yotpo_secret}`;
        const signature_str = `${formData.email}${formData.reviewer_type}${formData.time_stamp}${signature_secret}`;
        const signature_hash = createHash('sha256').update(signature_str).digest('hex');
        
        // const { success, message, data } = await s3FilesUpload(imageUrls, signature_hash);

        let imagesLoc = [];
      
        
        //     if (success) {
        //         data.map(obj=>imagesLoc.push(obj.Location))

        //     }
        //     else {
        //         console.log(message)
        //     }
  
        const body = {
            ...formData,
            image_urls: imagesLoc,
            appkey: process.env.NEXT_PUBLIC_yotpo_key,
            sku: product.product_id,
            product_title: product.name,
            product_url: process.env.NEXT_PUBLIC_siteUrl + "/" + product.product_uri,
            product_image_url: product.images[0]?.image_url,
            signature: signature_hash
        }

        const reactToast = await import("react-toastify");

        CreateReview(body).then((response) => {
            setLoading(false)            
            
            if( response.status === 200 ){
                setSuccess(true)
                
                reactToast.toast("Product Review Successfully Submitted");

                setTimeout(() => {
                    setLoading(false)
                    setSuccess(false)

                    // return the user back to the PDP
                    router.push(`/${product.product_uri}`)
                }, 3000)
            }

        }).catch((err) => {
            setLoading(false)
            setError(true)
            reactToast.toast.error("There was an error. Please select your rating")   

            setTimeout(() => {
                setLoading(false)
                setError(false)
            }, 3000)
        })
    }

    return(
        <form onSubmit={handleSubmit(postForm)} className={Utils.w_100}>
            <fieldset>
                <legend>
                    <strong className={clsx(Utils.fs_1, Utils.mb_1, Utils.d_block)}>
                        Review this Item
                    </strong>

                    <span className={clsx(Utils.fs_5)}>
                        {product.name}
                    </span>
                </legend>
            </fieldset>


            <fieldset>
                <div className={Utils.mt_6}>
                    <strong className={Utils.fs_4}>
                        Select your rating
                    </strong>

                    <Controller
                        name="review_score"
                        control={control}
                        render={({ field }) => (
                            <RatingsWidget 
                                {...field}
                                required
                                {...register("review_score", {
                                    onChange: (e) => console.log(e.target.value)
                                })}
                            />
                        )}
                    />
                </div>

                

                <h3 className={clsx(Utils.fs_4, Utils.mt_10, Utils.mb_0)}>
                    Write your review
                </h3>
                <p><small>*Required Fields</small></p>


                <div className={clsx(Utils.d_flex, Utils.mt_6, Utils.flex_column, Utils.flex_md_row)}>
                    <div className={clsx(Utils.w_100, Utils.pe_2)}>
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
                                    required
                                    type="email"
                                    label="Your Email Address*"
                                    helpText="Your email will not be displayed publicly, sold nor used for SPAM.  Your email will allow for us to send notifications."
                                />
                            )}
                        />
                    </div>
                </div>
            </fieldset> 


            {/* <fieldset className={Utils.mt_4}>
                <div className={clsx(Utils.w_100, Utils.mb_4)}>                   
                    <ImageUpload onUpload={ getUploadedImages} />                        
                </div>
            </fieldset> */}


             <fieldset>
                <div className={clsx(Utils.w_100, Utils.mb_4)}>
                    <Controller
                        name="review_title"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                required
                                label="Headline*"
                                helpText="Summarize your thoughts"
                            />
                        )}
                    />
                </div>


                <div className={Utils.w_100}>
                    <Controller
                        name="review_content"
                        control={control}
                        render={({ field }) => (
                            <Textarea 
                                {...field}
                                required
                                label="Describe your thoughts about this product*"
                            />
                        )}
                    />
                </div>
            </fieldset> 



            <fieldset>
                <div className={Utils.my_3}>
                    <Controller
                        name="--33401"
                        control={control}
                        render={({ field }) => (
                            <Switch 
                                {...field}
                                {...register("--33401", {
                                    onChange: (e) => console.log(e.target.value) 
                                })}
                                label="Do you recommend this product?"
                            />
                        )}
                    />
                </div>



                <div className={Utils.my_6}>
                    <h4 className={Utils.fs_4}>Review Guidelines</h4>
                    <ol className={clsx(Utils.ps_2, Utils.m_0)}>
                        <li>Focus on the product and its features.</li>
                        <li>What do you like or dislike about the product?</li>
                        <li>Did the product meet your expectations?</li>
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
                        `Submit Review`
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

export default ProductReviewForm;