"use client"

import clsx from "clsx";
import Style from "./Quantity.module.scss"
import { useEffect, useMemo, useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import range from "@/lib/utils/range";


function Quantity({ 
    size = "lg", 
    limit = 10, 
    qty = 1,
    onChange = () => null
}){
    const [ qtyValue, setQtyValue ] = useState(qty)
    const qtyRange = useMemo(() => range(1, limit), [ limit ])

    useEffect(() => {
        onChange(qtyValue)

    }, [qtyValue])


    return(
        <div className={Style.block}>
            <button 
                type="button"
                className={clsx(Style.control,  Style[size])}
            >
                <span>Qty</span>

                <span className={Style.qty}>
                    {qtyValue}
                </span>

                <IconChevronDown width="20" height="20" />
            </button>

            <menu className={Style.menu}>
                {qtyRange.map((item, index) => (
                    <li 
                        className={Style.menuItem} 
                        key={index}
                    >
                        <button
                            type="button"
                            className={Style.menuBtn}
                            onClick={() => setQtyValue(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </menu>
        </div>
    )
}

export default Quantity;