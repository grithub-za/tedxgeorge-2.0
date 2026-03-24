"use client"

import PropTypes from 'prop-types';
import React, { useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';
import { IconClose } from 'components/icons';

import Style from './PhoneInput.module.scss';


const PhoneInput = React.forwardRef(({ 
    label, 
    helpText,
    error, 
    required, 
    disabled, 
    name, 
    onChange = () => null,
    onClick = () => null,
    value,
    onFocus = () => null,
    onBlur = () => null,

}, ref) => {

    const phoneRef = useRef()
    const [ phoneNo, setPhoneValue ] = useState(value);
    const [ hasFocus, setHasFocus ] = useState(null)
    const id = useId()

    function checkForValue(e) {
        const hasValue = ref?.current?.value.length || e?.target?.value.length;
        const hasCurrentFocus = document.activeElement === phoneRef.current;

        if( hasCurrentFocus && !hasValue ){
            setHasFocus(true)

        }else if( !hasCurrentFocus && hasValue ){
            setHasFocus(true)

        }else if( !hasCurrentFocus && !hasValue ){
            setHasFocus(false)
        }
    }




    const inputChange = (e) => {
        const val = phoneRef.current.value.replace(/\D/g,'').substring(0,12);

        const areaCode = val.substring(0,3);
        const exchangeCode = val.substring(3,6);
        const subscriberNumber = val.substring(6,12);

        const finalVal = `${areaCode}${areaCode.length === 3 ? (exchangeCode && `-${exchangeCode}`) : ""}${exchangeCode.length === 3 ? (subscriberNumber && `-${subscriberNumber}`) : ""}`;

        setPhoneValue(finalVal);
        onChange(finalVal, e);
        checkForValue(e)
    }


    useEffect(() => {
        if( phoneRef.current ){
            setPhoneValue(phoneRef.current.value)
            setHasFocus(true)
        }

    }, [])


    const clearInput = () => {
        
        phoneRef.current.value = ""
        setPhoneValue("");
        
        if (onClick) {
            onClick();
        }
    }

    return(
        <div className={clsx(Style.block, hasFocus && Style.active)}>
           <div className={Style.controlGroup}>
                <input 
                    type="tel"
                    id={id}
                    ref={(node) => {
                        phoneRef.current = node;

                        if (typeof ref === 'function') {
                            ref(node);

                        } else if (ref) {
                            ref.current = node;
                        }
                    }}
                    name={name}
                    className={clsx(Style.control, error && Style.error__control)} 
                    required={required}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    maxLength={12}
                    minLength={12}
                    placeholder="___  -  ___  -  ____"
                    disabled={disabled}
                    onChange={inputChange}
                    onFocus={() => {
                        onFocus()
                        setHasFocus(true)
                    }}
                    onBlur={checkForValue}
                    value={phoneNo ?? ""}
                />

                <label 
                    onClick={() => phoneRef.current.focus()}
                    className={clsx(Style.label, error && Style.error__label)} 
                >
                    {label}
                </label>

                {phoneNo && (
                    <button type='button' onClick={clearInput} className={Style.clearInput}>
                        <IconClose />
                    </button>
                )}
            </div>

            {helpText && 
                <small className={clsx(Style.help, error && Style.error__help)}>
                    {helpText}
                </small>
            }
        </div>
    )
})

PhoneInput.displayName = "PhoneInput"

PhoneInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool
}


export default PhoneInput;