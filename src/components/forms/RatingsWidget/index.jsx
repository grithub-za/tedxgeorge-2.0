import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Style from './RatingsWidget.module.scss'

const ratings = [
    {title: "Excellent", id: "fiveStars", value: "5"},
    {title: "Good", id: "fourStars", value: "4"},
    {title: "Average", id: "threeStars", value: "3"},
    {title: "Fair", id: "twoStars", value: "2"},
    {title: "Poor", id: "oneStar", value: "1"},
];


const RatingsWidget = React.forwardRef(({ name, onChange, value }, ref) => {
    const [ score, setScore ] = useState(0);

    const inputChange = (e) => {
        setScore(e.target.value)
        onChange(e);
    }


    useEffect(() => {
        if( value ){
            setScore(value)
        }

    }, [value])


    return(
        <div className={Style.block}>
            {ratings.map(item => {
                return(
                    <label 
                        className={clsx(Style.widgetLabel, score === item.value && Style.active)} 
                        htmlFor={item.id} 
                        key={item.id}
                    >
                        <span>★</span> 
                        <input 
                            type="radio" 
                            name={name} 
                            value={item.value} 
                            title={item.title} 
                            id={item.id} 
                            className={Style.widgetScore} 
                            ref={ref} 
                            onChange={inputChange}
                        />
                    </label>
                )
            })}
        </div>
    )
})

RatingsWidget.displayName = 'RatingsWidget';


RatingsWidget.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
};


export default RatingsWidget;