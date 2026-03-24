"use client"

import PropTypes from 'prop-types';
import { Controller, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Input from 'components/forms/Input';
import Button from 'components/forms/Button';
import Loader from 'components/feedback/Loader';
import clsx from 'clsx';
import Style from './Newsletter.module.scss';
import { addCustomerToList } from 'thirdparty/Rejoiner/Rejoiner.service';

function Newsletter({ inline }){
    const [ isLoading, setLoading ] = useState(false)
    const [ isDone, setDone ] = useState(false)
    const emailRef = useRef()


    const { control, handleSubmit, setValue } = useForm({
        mode: "onBlur",
        reValidateMode: 'onChange',
        defaultValues: {
            email: ""
        }
    });


    const onSubmit = (data) => {
        setLoading(true)

        addCustomerToList({ 
            data: JSON.stringify(data), 
            list: process.env.NEXT_PUBLIC_rejoiner_modal_list

        }).then((response) => {
            setDone(true)

            setTimeout(() => {
                setLoading(false)
                setDone(false)
                setValue("email", "")
            }, 3000)

        }).catch(err => {
            setLoading(false)
        })
    }


    return(
        <>
            <form 
                name="newsletter" 
                onSubmit={handleSubmit(onSubmit)} 
                id="emailSignup"
                method="GET"     
            >
                <div className={clsx(Style.blockColumn)}>
                    <div className={clsx(Style.inputCntrFull)}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) =>
                                <Input 
                                    {...field}  
                                    label="Email Address"
                                    type="email"
                                    className={Style.formControl} 
                                    required 
                                    ref={emailRef}
                                    placeholder="YourEmail@example.com" 
                                />
                            }   
                        />
                    </div>

                    <div className={Style.inputCntrFull}>
                        <Button size="full" className={Style.full}>
                            {isLoading ? <Loader isLoading={isLoading} isSuccessful={isDone} /> : "Submit" }
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}


Newsletter.propTypes = {
    inline: PropTypes.bool
}



export default Newsletter;
