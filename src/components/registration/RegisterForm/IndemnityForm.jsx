"use client"

import { GlobalContext } from "@/contexts/GlobalContext";
import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Style from "./RegisterForm.module.scss"

import ButtonFeedback from "@/components/forms/Button/ButtonFeedback";
import useButtonFeedback from "@/components/forms/Button/useButtonFeedback";
import Signature from "@/components/display/Signature";


function IndemnityForm({ 
    ticket = {}, 
    onDone = () => null 
}){
    const [ global, dispatch ] = useContext(GlobalContext)
    const { register, handleSubmit, watch, clearErrors, setError, reset, formState: { errors } } = useForm();
    const feedback = useButtonFeedback()
    const sigCanvas = useRef()
    const [ signature, setSignature ] = useState(null)


    function onSubmit(data){
        feedback.setLoading(true)

        data.signature = signature
        data.signature_date = new Date().toDateString()


        dispatch({
            type: "editTicket",
            data: {
                ...ticket,
                options: {
                    ...ticket.options,
                    ...data
                }
            }
        })

        setTimeout(() => {
            feedback.setSuccess(true)
            feedback.setLoading(false)

            onDone()
        }, 2000)

    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <div className={Style.controlRow}>
                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="child_name_1">
                            1. Child's Full Name
                        </label>

                        <input 
                            id="child_name_1"
                            name="child_name_1"
                            type="text" 
                            placeholder="Child Name"
                            {...register("child_name_1")}
                            defaultValue={global.cart?.editTicket?.options?.child_name_1}
                            className={Style.control}
                        />
                    </p>

                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="child_name_2">
                            2. Child's Full Name
                        </label>

                        <input 
                            id="child_name_2"
                            name="child_name_2"
                            type="text" 
                            placeholder="Child Name"
                            {...register("child_name_2")}
                            defaultValue={global.cart?.editTicket?.options?.child_name_2}
                            className={Style.control}
                        />
                    </p>
                </div>

                <div className={Style.controlRow}>
                    <p className={Style.controlGroup}>
                        <label htmlFor="email">
                            Your Email Address
                        </label>

                        <input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="you@example.com"
                            {...register("email")}
                            defaultValue={global.cart?.editTicket?.options?.email}
                            className={Style.control}
                        />
                    </p>

                    <p className={Style.controlGroup}>
                        <label htmlFor="phone">
                            Your Phone Number
                        </label>

                        <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            placeholder="___-___-____" 
                            {...register("phone")}
                            defaultValue={global.cart?.editTicket?.options?.phone}
                            className={Style.control}
                        />
                    </p>
                </div>

                <section>
                    <p>I, <strong><u>{global.cart?.editTicket?.options.first_name +" "+ global.cart?.editTicket?.options.last_name}</u></strong> (Parent/Guardian) grant permission for <strong><u>{`${global.cart?.editTicket?.options.child_name_1} ${global.cart?.editTicket?.options.child_name_2 && " and " + global.cart?.editTicket?.options.child_name_2}`}</u></strong> to participate in the above named activity and I warrant that my child is in good health. In consideration of my child's participation, I agree to indemnify TED and TEDxGeorge from any claims or law suits brought against TED and TEDxGeorge by myself, my child or others, that arises out of any behavior by my child at the event/activity described above. I also agree to pay reasonable attorney's fees or expenses incurred by TED and TEDxGeorge in defense of such a claim/suit.</p>
                    <p><strong>EMERGENCY MEDICAL TREATMENT:</strong> In the event of an emergency, I give permission to transport my child to a hospital for medical treatment. I wish to be advised prior to any further treatment by a doctor or hospital. In the event of any emergency, if you are unable to reach me at the above numbers, contact:</p>
                </section>

                <div className={Style.controlRow}>
                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="emergency_contact_name">
                            Emergency Contact Name
                        </label>

                        <input 
                            id="emergency_contact_name"
                            name="emergency_contact_name"
                            type="text" 
                            placeholder="First Name & Surname"
                            {...register("emergency_contact_name")}
                            defaultValue={global.cart?.editTicket?.options?.emergency_contact_name}
                            className={Style.control}
                        />
                    </p>

                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="emergency_phone">
                            Emergency Contact Number
                        </label>

                        <input 
                            id="emergency_phone"
                            name="emergency_phone"
                            type="emergency_phone"
                            placeholder="___-___-____" 
                            {...register("emergency_phone")}
                            defaultValue={global.cart?.editTicket?.options?.emergency_phone}
                            className={Style.control}
                        />
                    </p>
                </div>
            </fieldset>


            <fieldset>
                <legend className={Style.legend}>
                    Optional Medical Information
                </legend>

                <p className={Style.controlGroup}>
                    <label htmlFor="child_medication">
                        Medication my child is taking at present
                    </label>

                    <input 
                        id="child_medication"
                        name="child_medication"
                        type="text"
                        {...register("child_medication")}
                        defaultValue={global.cart?.editTicket?.options?.child_medication}
                        className={Style.control}
                    />
                </p>

                <p className={Style.controlGroup}>
                    <label htmlFor="child_medical_conditions">
                        Other Medical Conditions
                    </label>

                    <input 
                        id="child_medical_conditions"
                        name="child_medical_conditions"
                        type="text"
                        {...register("child_medical_conditions")}
                        defaultValue={global.cart?.editTicket?.options?.child_medical_conditions}
                        className={Style.control}
                    />
                </p>


                <p className={Style.controlGroup}>
                    <label htmlFor="medical_aid">
                        Medical Aid Details
                    </label>

                    <input 
                        id="medical_aid"
                        name="medical_aid"
                        type="text"
                        {...register("medical_aid")}
                        defaultValue={global.cart?.editTicket?.options?.medical_aid}
                        className={Style.control}
                    />
                </p>


                <div className={Style.controlRow}>
                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="doctor_name">
                            Doctor Name
                        </label>

                        <input 
                            id="doctor_name"
                            name="doctor_name"
                            type="text" 
                            placeholder="First Name & Surname"
                            {...register("doctor_name")}
                            defaultValue={global.cart?.editTicket?.options?.doctor_name}
                            className={Style.control}
                        />
                    </p>

                    <p className={clsx(Style.controlGroup, Style.col_1_2)}>
                        <label htmlFor="doctor_number">
                            Doctor Number
                        </label>

                        <input 
                            id="doctor_number"
                            name="doctor_number"
                            type="doctor_number"
                            placeholder="___-___-____" 
                            {...register("doctor_number")}
                            defaultValue={global.cart?.editTicket?.options?.doctor_number}
                            className={Style.control}
                        />
                    </p>
                </div>
            </fieldset>
            
            

            <fieldset>
                <legend className={Style.legend}>
                    Add Your Signature
                </legend>

                <p>As Parent or Guardian, I agree to all of the above stated considerations and conditions. Signed on, <strong>{new Date().toDateString()}</strong></p>

                <Signature 
                    onSigned={(signature) => setSignature(signature)}
                    name={global.cart?.editTicket?.options?.first_name +" "+ global.cart?.editTicket?.options?.last_name}
                />
                
                <input 
                    name="signature" 
                    type="hidden" 
                    {...register("signature")} 
                    defaultValue={global.cart?.editTicket?.options?.signature}
                />

                <input 
                    name="signature_date" 
                    type="hidden" 
                    {...register("signature_date")} 
                    defaultValue={global.cart?.editTicket?.options?.signature_date}
                />


                <button 
                    type="submit" 
                    className={clsx(Style.btn, "btn btn-danger")}
                >
                    <ButtonFeedback {...feedback}>
                        Submit Indemnity Form
                    </ButtonFeedback>
                </button>
            </fieldset>
        </form>
    )
}

export default IndemnityForm;