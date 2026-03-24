"use client"

import range from "@/lib/utils/range";
import wordCount from "@/lib/utils/wordCount";
import clsx from "clsx";
import Style from "./RegisterForm.module.scss"
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import IndemnityForm from "./IndemnityForm";



function RegisterForm(){
    const [ global, dispatch ] = useContext(GlobalContext)
    const [ bringKids, setBringKids ] = useState(false)
    const [ id, setId ] = useState(null)
    const { register, handleSubmit, watch, clearErrors, setError, reset, formState: { errors } } = useForm();

    function closeModal(){
        dispatch({
            type: "openModal",
            data: {
                isOpen: false,
                title: "",
                content: null
            }
        })
    }


    function triggerIndemnifyModal(canShow){
        if(canShow){
            dispatch({
                type: "openModal",
                data: {
                    isOpen: true,
                    title: "Parental Indemnify & Consent",
                    content: <IndemnityForm ticket={global?.cart?.editTicket} onDone={closeModal} />
                }
            })
        }
    }


    function onSubmit(data){
        console.log(data)
    }



    useEffect(() => {
        if( id !== global?.cart?.editTicket?.id ){
            reset()
        }

    }, [ global?.cart?.editTicket?.id ])




    function updateTicket({ name, value, global, fieldValues }){
        const validate = []

        Object.keys(fieldValues).forEach(option => {
            switch(option){
                case "title":
                case "first_name":
                case "last_name":
                case "email":
                case "phone":
                case "city":
                case "occupation":
                case "makes_me_happy":
                    validate.push(fieldValues[option])
                    break;
            }
        })

        const isDone = validate.every(item => item !== "");

        const newEditTicket = { 
            ...global?.cart?.editTicket,
            id: global?.cart?.editTicket.id,
            isDone,
            options: {
                ...global?.cart?.editTicket.options,
                [name]: value
            }
        }

        dispatch({
            type: "editTicket",
            data: newEditTicket
        })


        setId(newEditTicket.id)


        if( isDone ){
            LocalStorage.addToStorage("TXG_cart", newEditTicket)
        }
    }



    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            updateTicket({ 
                name, 
                value: value[name], 
                global, 
                fieldValues: value 
            })
        })

        return () => subscription.unsubscribe()

    }, [ watch, errors, global?.cart?.editTicket ])



    return(
        <>
            <form className={Style.form}  onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend className={Style.legend}>
                        Tell us about yourself.
                    </legend>

                    <p className={Style.controlGroup}>
                        <label htmlFor="title">
                            Title*
                        </label>

                        <input 
                            id="title"
                            name="title"
                            required
                            type="text" 
                            defaultValue={global.cart?.editTicket?.options?.title}
                            {...register("title")}
                            placeholder="Mr, Mrs, Dr, etc."
                            className={clsx(Style.control, Style.controlShort)}
                        />
                    </p>
                    
                    <p className={Style.controlGroup}>
                        <label htmlFor="first_name">
                            First Name*
                        </label>

                        <input 
                            id="first_name"
                            name="first_name"
                            required
                            defaultValue={global.cart?.editTicket?.options?.first_name}
                            {...register("first_name")}
                            type="text" 
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="lastName">
                            Surname*
                        </label>

                        <input 
                            id="last_name"
                            name="last_name"
                            required
                            type="text" 
                            defaultValue={global.cart?.editTicket?.options?.last_name}
                            {...register("last_name")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="occupation">
                            Occupation*
                        </label>

                        <input 
                            id="occupation"
                            name="occupation"
                            required
                            type="text" 
                            defaultValue={global.cart?.editTicket?.options?.occupation}
                            {...register("occupation")}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="makesMeHappy">
                            In 3 words or less, what makes you happy?*
                        </label>

                        <input 
                            id="makes_me_happy"
                            name="makes_me_happy"
                            required
                            className={Style.control}
                            type="text"
                            defaultValue={global.cart?.editTicket?.options?.makes_me_happy}
                            {...register("makes_me_happy", {
                                validate: (value) => wordCount(value, 3)
                            })}
                            onBlur={(e) => {
                                const words = wordCount(e.target.value, 3)

                                if(words){
                                    clearErrors("makes_me_happy")

                                }else{
                                    setError("makes_me_happy", {
                                        type: "manual",
                                        message: "Please use 3 words or less."
                                    })
                                }
                            }}
                            placeholder="Chocolate, A Gentile Rain, Gardening, etc."
                        />
                    </p>

                    {global.cart?.editTicket?.type === "VIP" && (
                        <p className={Style.controlGroup}>
                            <label htmlFor="tee_shirt_size">
                                Tee Shirt Size
                            </label>

                            <select 
                                id="tee_shirt_size"
                                name="tee_shirt_size"
                                defaultValue={global.cart?.editTicket?.options?.tee_shirt_size}
                                {...register("tee_shirt_size")}
                                className={clsx(Style.control, Style.controlShort)}
                            >
                                <option value="">-- Size --</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="xlarge">X-Large</option>
                                <option value="xxlarge">XX-Large</option>
                                <option value="xxxlarge">XXX-Large</option>
                                <option value="4xlarge">4X-Large</option>
                                <option value="5xlarge">5X-Large</option>
                            </select>
                        </p>
                    )}
                </fieldset>


                <fieldset>
                    <legend className={Style.legend}>
                        What is your contact information?
                    </legend>

                    <p className={Style.controlGroup}>
                        <label htmlFor="email">
                            Email Address*
                        </label>

                        <input 
                            id="email"
                            name="email"
                            type="email" 
                            required
                            placeholder="you@example.com"
                            {...register("email")}
                            defaultValue={global.cart?.editTicket?.options?.email}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="phone">
                            Phone Number*
                        </label>

                        <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            required
                            placeholder="___-___-____" 
                            {...register("phone")}
                            defaultValue={global.cart?.editTicket?.options?.phone}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="city">
                            Your City*
                        </label>

                        <input 
                            id="city"
                            name="city"
                            type="text" 
                            required
                            {...register("city")}
                            defaultValue={global.cart?.editTicket?.options?.city}
                            className={Style.control}
                        />
                    </p>


                    <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                        <input 
                            id="post_event_survey"
                            name="post_event_survey"
                            type="checkbox"
                            defaultChecked={true}
                            {...register("post_event_survey")}
                            className={Style.control}
                        />

                        <label htmlFor="afterParty">
                            Yes, email me the post-event Survey from TED!<br/>
                            <small>*TED, TEDx or Delighted (our third party survey partner) will not use any collected email addresses for any purpose other than sending this particular survey.</small>
                        </label>
                    </p>
                </fieldset>


                <fieldset>
                    <legend className={Style.legend}>
                        Interested in any extras?
                    </legend>


                    {(global.cart?.editTicket?.type === "VIP" || global.cart?.editTicket?.type === "General +") && (
                        <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                            <input 
                                id="after_party"
                                name="after_party"
                                type="checkbox"
                                defaultChecked={!!global.cart?.editTicket?.options?.after_party}
                                {...register("after_party")}
                                className={Style.control}
                            />

                            <label htmlFor="afterParty">
                                YES! I will be attending the TEDx After Party. <br/><small>*Must be 18 or older to attend.</small>
                            </label>
                        </p>
                    )}


                    <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                        <input 
                            id="kids_zone"
                            name="kids_zone"
                            type="checkbox"
                            {...register("kids_zone", {
                                onChange: () => setBringKids(!bringKids)
                            })}
                            defaultChecked={!!global.cart?.editTicket?.options?.kids_zone}
                            className={Style.control}
                        />

                        <label htmlFor="kids_zone">
                            I'd like to bring my kids to the FREE Kids Zone (Ages 5-16). <br/> <small>*Only 2 children per ticket.</small>
                        </label>
                    </p>

                    {(bringKids || global.cart?.editTicket?.options?.kids_zone) && (
                        <div className={Style.highlight}>
                            <div className={Style.controlRow}>
                                <p className={clsx(Style.controlGroup, Style.col_2_3)}>
                                    <label htmlFor="child_name_1">
                                        1. Child's Full Name
                                    </label>

                                    <input 
                                        id="child_name_1"
                                        name="child_name_1"
                                        type="text" 
                                        placeholder="First Name & Surname"
                                        {...register("child_name_1")}
                                        defaultValue={global.cart?.editTicket?.options?.child_name_1}
                                        className={Style.control}
                                    />
                                </p>

                                <p className={Style.controlGroup}>
                                    <label htmlFor="child_age_1">
                                        Age
                                    </label>

                                    <select
                                        id="child_age_1"
                                        name="child_age_1"
                                        {...register("child_age_1")}
                                        defaultValue={global.cart?.editTicket?.options?.child_age_1}
                                        className={clsx(Style.control)}
                                    >
                                        <option value="">-Age-</option>
                                        {range(5, 16).map((age) => (
                                            <option value={age} key={age}>
                                                {age}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>

                            <div className={Style.controlRow}>
                                <p className={clsx(Style.controlGroup, Style.col_2_3)}>
                                    <label htmlFor="child_name_2">
                                        2. Child's Full Name
                                    </label>

                                    <input 
                                        id="child_name_2"
                                        name="child_name_2"
                                        type="text" 
                                        placeholder="First Name & Surname"
                                        {...register("child_name_2")}
                                        defaultValue={global.cart?.editTicket?.options?.child_name_2}
                                        className={Style.control}
                                    />
                                </p>

                                <p className={Style.controlGroup}>
                                    <label htmlFor="child_age_2">
                                        Age
                                    </label>

                                    <select
                                        id="child_age_2"
                                        name="child_age_2"
                                        {...register("child_age_2")}
                                        defaultValue={global.cart?.editTicket?.options?.child_age_2}
                                        className={clsx(Style.control)}
                                    >
                                        <option value="">-Age-</option>
                                        {range(5, 16).map((age) => (
                                            <option value={age} key={age}>
                                                {age}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </div>

                            <div className={Style.controlRow}>
                                <p className={clsx(Style.controlGroup, Style.checkboxControl)}>
                                    <input 
                                        id="indemnify_and_consent"
                                        name="indemnify_and_consent"
                                        type="checkbox"
                                        {...register("indemnify_and_consent", {
                                            onChange: (e) => triggerIndemnifyModal(e.target.checked)
                                        })}
                                        defaultChecked={!!global.cart?.editTicket?.options?.indemnify_and_consent}
                                        className={Style.control}
                                    />

                                    <label htmlFor="indemnify_and_consent">
                                        <small>I grant permission for my child(ren) to participate in the Kids Zone activities at TEDxGeorge from any claims or law suits brought against TED or TEDxGeorge by myself, my child or others, that arises out of any behavior by my child at the event/activity described above.</small>
                                    </label>
                                </p>    
                            </div>

                            {global.cart?.editTicket?.options?.indemnify_and_consent && (
                                <button 
                                    type="button" 
                                    onClick={() => triggerIndemnifyModal(true)} 
                                    className={Style.reviewIndemnity}
                                >
                                    Review Indemnity & Consent Form &raquo;
                                </button>
                            )}
                            
                        </div>
                    )}
                </fieldset>
            </form>
        </>
    )
}


export default RegisterForm;