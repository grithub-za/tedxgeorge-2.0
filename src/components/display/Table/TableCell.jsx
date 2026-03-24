import Style from "./Table.module.scss"


export function TableCell({ children }){
    return (
        <td className={Style.cell}>
            {children}
        </td>
    )
}
