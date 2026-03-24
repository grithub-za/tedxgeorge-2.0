import { IconClose } from 'components/icons';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Style from './CloseBtn.module.scss'

function CloseBtn({ 
    shouldClose, 
    className = "", 
    noFlex = false,
    width = 30,
    height = 30 
}){
    
    return(
        <button 
            type="button" 
            className={clsx(Style.block, className, noFlex && Style.noFlex)} 
            aria-label="Close" 
            onClick={() => shouldClose(true)} 
            title="close"
        >
            <IconClose width={width} height={height} />
        </button>
    )
}

CloseBtn.propTypes = {
    shouldClose: PropTypes.func.isRequired,
    className: PropTypes.string,
    noFlex: PropTypes.bool
}
  
export default CloseBtn