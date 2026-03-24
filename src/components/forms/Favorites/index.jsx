import clsx from 'clsx';
import Button from 'components/forms/Button';
import { IconHeart } from 'components/icons';

import Style from './Favorites.module.scss';
import ButtonStyle from '../Button/Button.module.scss';




function Favorites({ isLarge, className, handleClick }){
    return(
        <div className={clsx(Style.block, className)}>
            <Button 
                data-tip="Save to My Lists" 
                title="Save to My Lists"
                alt="Save to My Lists"
                size={isLarge ? "md" : "icon"} 
                isRound={!isLarge} 
                className={ButtonStyle.black} 
                onClick={() => handleClick()} 
                noAnimate={true}
                color="indigo"
            >
                <IconHeart 
                    width="30" 
                    height="60" 
                    className={Style.icon} 
                />
            </Button>
        </div>
    )
}


export default Favorites;
