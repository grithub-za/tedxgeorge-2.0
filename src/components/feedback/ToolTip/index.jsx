"use client"

import HelpOutline from "@/icons/HelpOutline";
import InfoOutline from "@/icons/InfoOutline";
import Style from "./ToolTip.module.scss"
import { usePopper } from "react-popper";
import { useState } from "react";

function ToolTip({ 
    type = "info", 
    text = "",
    manualClose = false 
}){

    const [ referenceElement, setReferenceElement ] = useState(null)
    const [ popperElement, setPopperElement ] = useState(null)
    const [ show, setShown ] = useState(false)

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
        modifiers: [
            {
                name: 'offset',
                options: {
                  offset: [-20, 0],
                },
            }
        ]
    })

    return(
        <span className={Style.block}>
            <span 
                className={Style.control} 
                ref={setReferenceElement} 
                onMouseEnter={() => setShown(true)}
                onMouseLeave={() => { 
                    if( !manualClose ){ setShown(false) }
                }}
            >
                {type === "info" && (
                    <InfoOutline className={Style.icon} />
                )}

                {type === "help" && (
                    <HelpOutline className={Style.icon} />
                )}
            </span>


            {show && (
                <span 
                    ref={setPopperElement} 
                    style={styles.popper} 
                    {...attributes.popper} 
                    className={Style.popover}
                >
                    <span 
                        className={Style.text}
                        dangerouslySetInnerHTML={{ __html: text }} 
                    />
                </span>
            )}
            
        </span>
    )
}

export default ToolTip;