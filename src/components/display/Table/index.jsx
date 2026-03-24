import Style from "./Table.module.scss";
import { TableHeading } from "./TableHeading";
import { TableCell } from "./TableCell";
import { TableRow } from "./TableRow";
import clsx from "clsx";


export default function Table({ children, className }){
    return(
        <table className={clsx(Style.block, className)}>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export{
    TableHeading,
    TableCell,
    TableRow
}