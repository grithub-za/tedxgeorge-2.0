import Item from "./Item";
import Actions from "./Actions";
import WidgetBody from "@/components/feedback/WidgetBody";
import Style from "./CartWidget.module.scss";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext, useMemo } from "react";
import Card from "@/components/display/Card";
import sortBy from "lodash/sortBy";

function CartWidget(){
    const [ global, _ ] = useContext(GlobalContext)

    const lineItems = useMemo(() => {
        return sortBy(global?.cart.lineItems, ["type"])
        
    }, [global?.cart.lineItems])



    return(
        <WidgetBody actions={<Actions cartData={global?.cart} />} noCard className={Style.content}>
            {Array.isArray(lineItems) && lineItems.length ? (
                <>
                    {lineItems.map((item) => {
                        const { type, price, quantity, listPrice, id } = item;

                        return(
                            <Item 
                                key={item.id}
                                {...{ 
                                    type,
                                    price,
                                    quantity,
                                    listPrice,
                                    id
                                }}
                            />
                        )
                    })}
                </>
            ):(
                <Card className={Style.empty}>
                    <h3>No tickets in your cart</h3>
                </Card>
            )}          
        </WidgetBody>
    )
}

export default CartWidget;