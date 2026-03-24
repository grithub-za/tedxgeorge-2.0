import PropTypes from 'prop-types';
import clsx from "clsx";
import Style from '../Progress/Progress.module.scss';


function ProgressStep({ children, isActive, isComplete }){
    return(
        <li className={clsx(
                Style.step, 
                isActive && Style.active,
                isComplete && Style.complete
            )}
        >
            {children}
        </li>
    )
}

ProgressStep.propTypes = {
    children: PropTypes.any,
    isActive: PropTypes.bool,
    isComplete: PropTypes.bool,
}

export default ProgressStep;