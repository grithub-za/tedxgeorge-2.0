import clsx from "clsx";
import Style from "./WidgetBody.module.scss";
import Card from "@/components/display/Card";


function WidgetBody({ children, actions, noCard, className }){
    const Element = noCard ? "div" : Card;

    return(
        <div className={Style.block}>
            <Element className={clsx(Style.content, className)}>
                {children}
            </Element>

            {actions && (
                <Card className={Style.actions}>
                    {actions}
                </Card>
            )}
        </div>
    )
}


export default WidgetBody;