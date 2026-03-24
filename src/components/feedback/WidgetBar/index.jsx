"use client"

import Backdrop from "@/components/feedback/Backdrop";
import Style from "./WidgetBar.module.scss";
import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { IconClose } from "@/icons/IconClose";
import { GlobalContext } from "@/contexts/GlobalContext";
import { usePathname } from "next/navigation";


function WidgetBar(){
    const pathName = usePathname()
    const [ show, setShown ] = useState(null)
    const [ global, dispatch ] = useContext(GlobalContext)


    useEffect(() => {
        setShown(global.widget.isOpen)

    }, [ global.widget.isOpen ])


    function closeWidget(){
        dispatch({
            type: "setWidget",
            data: {
                isOpen: false,
                component: null
            }
        })
    }


    useEffect(() => {
        closeWidget()

    }, [ pathName])

    return(
        <>
            <aside className={clsx(Style.block, show && Style.show)}>
                <header className={Style.header}>
                    {global.widget.secondaryControl && (
                        <div className={Style.secondary}>
                            {global.widget.secondaryControl}
                        </div>
                    )}

                    <p className={Style.heading}>
                        {global.widget.heading}
                    </p>

                    <button 
                        type="button" 
                        className={Style.closeBtn}
                        onClick={closeWidget}
                    >
                        <IconClose width="30" height="30" />
                    </button>
                </header>

                <div className={Style.body}>
                    {global.widget.component}
                </div>
            </aside>

            <Backdrop 
                updateOverlay={closeWidget}
                {...{ show }} 
            />
        </>
        
    )
}

export default WidgetBar;