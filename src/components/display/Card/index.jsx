import clsx from 'clsx';
import Style from './Card.module.scss'


function Card({ 
    children, 
    className, 
    marginBottom = null, 
    noMargin,
    isTransparent = false,
}){
    return(
        <article 
            className={clsx(
                Style.block, className, 
                noMargin && Style.noMargin, 
                isTransparent && Style.clear 
            )} 
            style={{ marginBottom: `${marginBottom ?? 0}rem` }}
        >
            {children}
        </article>
    )
}

export default Card;