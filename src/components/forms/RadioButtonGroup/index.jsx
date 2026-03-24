import PropTypes from 'prop-types';
import Style from './RadioButtonGroup.module.scss';
import React from 'react';


const RadioButtonGroup = React.forwardRef(({ children }, ref) => {
    return(
        <div className={Style.block} ref={ref}>
            {children}
        </div>
    )
})

RadioButtonGroup.displayName = 'RadioButtonGroup';

RadioButtonGroup.propTypes = {
    children: PropTypes.node,
};


export default RadioButtonGroup;