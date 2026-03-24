import Style from "./Table.module.scss"


export function TableHeading({ children }){
    return(
        <th className={Style.heading}>
            {children}
        </th>
    )
}
