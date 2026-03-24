"use client"

import PropTypes from 'prop-types';
import Loader from '../Loader';
import Style from './Backdrop.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';

function Backdrop({ 
    show, 
    headerHeight, 
    showLoader, 
    className,
    updateOverlay = () => false, 
    isImmobile, 
    isTakeover,
    shouldBlur = true 
}){

    function focusContent({ overflow, filter }){
        document.body.style.overflow = overflow;

        if( shouldBlur ){
            document.getElementById("wrapper").style.filter = filter;
        }
    }


    useEffect(() => {
        focusContent({ 
            overflow: show ? "hidden" : "auto",
            filter: `blur(${show ? 5 : 0}px)`
        })

    }, [ show ])


    return(
        <>
            {show && (
                <div 
                    role="presentation"
                    className={clsx(Style.underlay, isTakeover && Style.takeover, className)} 
                    style={{top: !isImmobile ? 0 : headerHeight}} 
                    onClick={() => updateOverlay(false)}
                >
                    {showLoader && <Loader isLoading isLarge />}
                </div>
            )}
        </>
    )
}

Backdrop.propTypes = {
    isImmobile: PropTypes.bool,
    show: PropTypes.bool,
    showLoader: PropTypes.bool,
    updateOverlay: PropTypes.func,
    headerHeight: PropTypes.number,
    isTakeover: PropTypes.bool
};


export default Backdrop;