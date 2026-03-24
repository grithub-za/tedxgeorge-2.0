import PropTypes from 'prop-types';
import Style from './Progress.module.scss'


function Progress({ children }){
    return(
        <ol className={Style.block}>
           {children}
        </ol>
    )
}


Progress.propTypes = {
    children: PropTypes.any
}


export default Progress;