"use client"

/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';
import removeSpaces from 'lib/Utils/removeSpaces';
import { IconClose, IconInputError } from 'components/icons';
import { IconSearch } from 'components/icons/IconSearch';

import Style from './Input.module.scss';



const Input = React.forwardRef(({
    type = "text",
    className,
    autoComplete,
    label,
    name,
    required,
    disabled,
    error = false,
    value,
    canClear,
    placeholder,
    min,
    max,
    id,
    accept,
    maxLength,
    minLength,
    readOnly,
    helpText,
    controlClass,
    unitText,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    onKeyUp = () => null,
    onInput = () => null,
    autoFocus = false,
    ...other
}, ref ) => {

    const inputRef = useRef()
    const [ newValue, setValue ] = useState("")
    const [ inputType, setType ] = useState(type);
    const [ hasFocus, setHasFocus ] = useState(null)
    const genId = useId()

    useEffect(() => {
        if( autoFocus ){ 
            inputRef.current.focus() 
        }
        
    }, [])


    useEffect(() => {
        if( value || value === 0 ){
            setValue(value)
            setHasFocus(true)
        }
        
    }, [ value ])

 
     
    const togglePassword = () => {
        const newType = inputType === "text" ? "password" : "text"
        setType(newType)
    }


    const triggerEvents = (event) => {
        const value = inputRef.current.value;

        if( onChange ){ onChange(value, inputRef.current, event); }
        if( onKeyUp ){ onKeyUp(value, inputRef.current, event); }
        if( onInput ){ onInput(value, inputRef.current, event); }
    }


    function checkForValue(e){
        const hasValue = ref?.current?.value.length || e?.target?.value.length;
        const hasCurrentFocus = document.activeElement === inputRef.current;

        if( 
            (hasCurrentFocus && hasValue)  ||
            (hasCurrentFocus && !hasValue) || 
            (!hasCurrentFocus && hasValue) 
        ){
            setHasFocus(true)

        }else if( !hasCurrentFocus && !hasValue ){
            setHasFocus(false)
            onBlur()
        }
    }


    const inputChange = (e) => {
        triggerEvents(e)
        setValue(ref?.current?.value ?? e?.target?.value)
        checkForValue(e)
    }


    const clearInput = () => {
        inputRef.current.value = "";

        setValue("")
        triggerEvents()
        onBlur()
    }


    return(
        <div className={clsx(Style.block, className && className, hasFocus && Style.active, type === "file" && Style.file)}>
            <div className={Style.controlGroup}>
                <input 
                    ref={(node) => {
                        inputRef.current = node;

                        if (typeof ref === 'function') {
                            ref(node);

                        } else if (ref) {
                            ref.current = node;
                        }
                    }}
                    id={id ?? genId}
                    autoComplete={!autoComplete && "new-password"}
                    type={inputType}
                    name={name}
                    className={clsx(Style.control, controlClass, error && Style.error__control)} 
                    required={required}
                    placeholder={placeholder}
                    value={newValue}
                    accept={accept}
                    disabled={disabled}
                    onChange={inputChange}
                    onInput={inputChange}
                    onKeyUp={inputChange}
                    onFocus={() => {
                        onFocus()
                        setHasFocus(true)
                    }}
                    onBlur={checkForValue}
                    min={min}
                    max={max}
                    readOnly={readOnly}
                    minLength={type === "password" ? 8 : minLength}
                    maxLength={type === "password" ? 20 : maxLength}
                    {...other}
                />

                {error && (
                    <IconInputError 
                        className={clsx(Style.errorIcon, (type !== "password" && !newValue) && Style.flushRightIcon )}
                    />
                )}


                {(canClear && hasFocus && type !== "password") && (
                    <button type='button' onClick={clearInput} className={Style.clearInput}>
                        <IconClose />
                    </button>
                )}
                

                {type === "password" && (
                    <button type="button" className={Style.togglePassword} onClick={togglePassword}>
                        {inputType === "text" ? "Hide" : "Show"}
                    </button>
                )}


                {unitText && (
                    <span className={Style.postFix}>
                        {unitText}
                    </span>
                )}


                <label
                    onClick={() => inputRef.current.focus()}
                    className={clsx(Style.label, error && Style.error__label, !!unitText && Style.hasUnit)} 
                    htmlFor={removeSpaces(id ?? genId)}
                >
                    {label}
                </label>

                {type === "search" && <IconSearch className={Style.searchIcon} />}
            </div>

            {helpText && 
                <p className={clsx(Style.help, error && Style.error__help)}>
                    {helpText}
                </p>
            }
        </div>
    )
})

Input.displayName = 'Input';


Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "number", "time", "url", "password", "search", "tel" ]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    controlClass: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    helpText: PropTypes.string,
    canClear: PropTypes.bool,
    accept: PropTypes.string,
    error: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
}




export default Input;