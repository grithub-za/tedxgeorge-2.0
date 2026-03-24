"use client"

import Style from "./Header.module.scss"
import { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import { GlobalContext } from '@/contexts/GlobalContext';
import { IconClose } from '@/icons/IconClose';
import { usePathname } from 'next/navigation';



function Menu(){
    const [ state, dispatch ] = useContext(GlobalContext)
    const pathName = usePathname()

    useEffect(() => {
        if( pathName ){
            dispatch({ type: "toggleNav", data: false })
        }

    }, [ pathName ])

    return(
        <nav className={clsx(state.nav.isOpen ? Style.open : Style.closed, Style.nav)}>
            <menu className={clsx("list-inline d-flex h3 align-items-center mb-0 justify-content-between w-100")}>
                <li className="me-4 me-lg-5">
                    <Link href="/events" className="p-1">
                        Events
                    </Link>
                </li>
                
                <li className="me-4 me-lg-5">
                    <Link href="/volunteer" className="p-1">
                        Volunteer
                    </Link>
                </li>
                
                <li className="me-4 me-lg-5">
                    <Link href="/speakers/talks" className="p-1">
                        Talks
                    </Link>
                </li>

                 {/* <li className="me-4 me-lg-5">
                    <Link href="/speakers" className="p-1">
                        Speakers
                    </Link>
                </li> */}

                <li className="me-4 me-lg-5">
                    <Link href="/speakers/nominate" className="p-1">
                        Nominate Speaker
                    </Link>
                </li>
               
                {/* <li className="me-4 me-lg-5">
                    <Link href="/events/agenda" className="p-1">
                        Schedule
                    </Link>
                </li> */}
                <li className="me-4 me-lg-5">
                    <Link href="/partners" className="py-1">
                        Partners
                    </Link>
                </li>
                {/* <li className="me-4 me-lg-5">
                    <Link href="/about">
                        About
                    </Link>
                </li> */}
                

                {/* <a href="/tickets" className={clsx(Style.btn, "btn btn-danger px-4 py-3")}>
                    Tickets
                </a> */}
            </menu>

            <button 
                type="button" 
                className={Style.closeBtn}
                onClick={() => dispatch({ type: "toggleNav" })}
            >
                <IconClose width="50" height="50" fill="#fff " />
            </button>
        </nav>
    )
}

export default Menu;