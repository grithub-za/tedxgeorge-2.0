
import formatPrice from "@/lib/utils/formatPrice";
import Style from './Price.module.scss';
import Badge from "@/components/display/Badge";
import clsx from "clsx";


function Price({ value, listPrice, size, showSaleFlag = false, discount }){
    return(
        <span itemProp="price" className={Style.block} suppressHydrationWarning>
            <div className={Style.priceRow}>
                <span className={clsx(Style[size], Style.price)}>
                    {formatPrice(value)}
                </span>

                {showSaleFlag && (
                    <Badge variant="square" className={Style.badge} color="red">
                        -{Math.round((discount)*100)}% Off
                    </Badge>
                )}
            </div>
            

            {(listPrice && showSaleFlag) ? (
                <span className={Style.listPrice}>
                    Regular price: <strike>{formatPrice(listPrice)}</strike>
                </span>
            ):null}
        </span>
    )
}

export default Price;