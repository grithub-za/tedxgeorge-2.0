"use client"

import React, { useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Style from './Checkbox.module.scss';


const Checkbox = React.forwardRef(({
    className,
    name,
    value,
    required,
    disabled,
    labelCase = "capitalize",
    isSelected,
    id,
    label,
    noFlex,
    onChange,
    children = null,
    ...other
}, ref) => {

    const checkboxRef = useRef()
    const [ newValue, setValue ] = useState(value)
    const checkboxId = useId();


    useEffect(() => {
        if( value || value === 0 ){
            setValue(value)
        }
        
    }, [value])


    const toggleCheckbox = () => {
        const value = checkboxRef.current.value;
        onChange(value, checkboxRef.current);
    }



    const inputChange = () => {
        toggleCheckbox()
        setValue(checkboxRef?.current?.checked ? value : "" )
    }
    

    return(
        <div className={clsx(Style.block, className, disabled && Style.disabled)}>
            <input 
                {...other}
                ref={(node) => {
                    checkboxRef.current = node;

                    if (typeof ref === 'function') {
                        ref(node);

                    }else if (ref) {
                        ref.current = node;
                    }
                }}
                type="checkbox"
                name={name}
                value={newValue}
                onChange={inputChange}
                required={required}
                disabled={disabled}
                className={Style.control}
                checked={isSelected}
                id={id ?? checkboxId}
            />

            {(label || children) && (
                <label htmlFor={id ? id : checkboxId} className={clsx(Style.label, Style[labelCase])}>
                    {label}
                    {children}
                </label>
            )}
        </div>
    )
})


Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    labelCase: PropTypes.oneOf(['upper', 'lower', 'capitalize', 'none']),
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    isSelected: PropTypes.bool
}


export default Checkbox;