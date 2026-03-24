import PropTypes from 'prop-types';
import clsx from 'clsx'
import ProductPrice from 'components/product/ProductPrice'
import range from 'lib/Utils/range'
import Button from '../Button'

import Style from './ButtonGroup.module.scss'



function ButtonGroup({ type, size, itemsAvailable = {} }){
    const items = range(0, 6)

    return(
        <div className={Style.block}>
            {items.map((_, i) => {
                return(
                    <Button
                        key={i}
                        {...{ type, size }}
                        variant="outline"
                        color="ocean"
                        autoHeight
                        href="#"
                        className={clsx(Style.item, i === 2 && Style.active)}
                        noAnimate={i === 2}
                        type="link"
                    >
                        <span className={Style.heading}>
                            {10+i}x{10-i} ft.
                        </span>

                        <ProductPrice 
                            className={Style.price}
                            price={9.00*(i+1)}
                        />
                    </Button>
                )
            })}
        
        </div>
    )
}


ButtonGroup.propTypes = {
    type: PropTypes.string, 
    size: PropTypes.string, 
    itemsAvailable: PropTypes.array
}

export default ButtonGroup