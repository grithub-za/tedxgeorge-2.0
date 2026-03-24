import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useId, useRef, useState } from 'react';


import Style from './Radio.module.scss';

const Radio = React.forwardRef(({ 
    children, 
    className, 
    disabled, 
    name, 
    value, 
    required, 
    isSelected, 
    position, 
    label, 
    id, 
    onChange 
}, ref) => {

    const radioRef = useRef()
    const fakeId = useId();
    const [ newValue, setValue ] = useState()

    const toggleRadio = () => {
        const value = radioRef.current.value;
        onChange(value, radioRef.current);
    }

    const inputChange = () => {
        toggleRadio()
        setValue(radioRef?.current?.checked ? value : "" )
    }


    useEffect(() => {
        if( value ){
            setValue(value)
        }

    }, [value])


    return(
        <div className={clsx(Style.block, className, disabled && Style.disabled)}>
            <input 
                ref={(node) => {
                    radioRef.current = node;

                    if (typeof ref === 'function') {
                        ref(node);

                    } else if (ref) {
                        ref.current = node;
                    }
                }}
                type="radio"
                name={name}
                value={newValue}
                onChange={inputChange}
                required={required}
                disabled={disabled}
                checked={isSelected}
                className={clsx(Style.control, position && Style[`control_${position}}`])}
                id={id ? id : fakeId}
            />
            
            <label htmlFor={id ? id : fakeId} className={clsx(Style.label)}>
                {children ? children : label}
            </label>
        </div>
    )
})

Radio.displayName = "Radio";

Radio.propTypes = {
    label: PropTypes.string,
    id: PropTypes.oneOfType([ 
        PropTypes.number, 
        PropTypes.string 
    ]),
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    position: PropTypes.string,
    isSelected: PropTypes.bool
}


export default Radio;