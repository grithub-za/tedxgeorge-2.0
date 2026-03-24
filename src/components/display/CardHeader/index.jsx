import clsx from "clsx"
import Style from "./CardHeader.module.scss"


function CardHeader({ title, titleLink, subTitle, toolbar, className }){
    return(
        <header className={clsx(Style.block, className)}>
            <div className={clsx(Style.titleBlock, !title && Style.noFlex)}>
                <h3 className={Style.title}>
                    {title}

                    {titleLink && (
                        <small className={Style.titleLink}>
                            {titleLink}
                        </small>
                    )}
                </h3>

                {subTitle && (
                    <h4 className={Style.subTitle}>
                        {subTitle}
                    </h4>
                )}
            </div>

            {toolbar && (
                <div className={Style.toolbar}>
                    {toolbar}
                </div>
            )}
        </header>
    )
}


export default CardHeader;