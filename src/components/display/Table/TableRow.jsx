import Style from "./Table.module.scss"


export function TableRow({ children }){
    return(
        <tr className={Style.row}>
            {children}
        </tr>
    )
}

