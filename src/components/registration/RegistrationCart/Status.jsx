import clsx from "clsx";
import Style from "./RegistrationCart.module.scss"



function Status({ isDone = false }){
    return(
        <div className={clsx(Style.status, isDone && Style.done )}>
            { isDone ? (
                <svg id="icon-done" viewBox="0 0 24 24" className={Style.statusIcon}>
                    <path d="M9 16.219l10.594-10.641 1.406 1.406-12 12-5.578-5.578 1.359-1.406z"></path>
                </svg>
            ):(
                <svg id="icon-create" viewBox="0 0 24 24" className={Style.statusIcon}>
                    <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"></path>
                </svg>
            )}
        </div>
    )
}

export default Status;