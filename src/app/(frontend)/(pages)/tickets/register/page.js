import clsx from "clsx";
import Style from "../../Page.module.scss"
import Utils from "@/styles/globals/utils.module.scss"
import RegisterForm from "@/components/registration/RegisterForm";
import RegistrationCart from "@/components/registration/RegistrationCart";


export const metadata = {
    title: "Register",
    alternates: {
        canonical: "https://tedxgeorge.com/tickets/register",
    }
}

function Register(){
    return(
        <>
            <section className="container d-flex justify-content-center flex-column">
                <div className={Style.heading}>
                    <article>
                        <h1 className={clsx(Utils.fs_1, "mb-0")}>
                            Let's get you registered.
                        </h1>
                    </article>
                </div>

                <div className={Style.regContainer}>
                    <RegisterForm />
                    <RegistrationCart />
                </div>
            </section>
        </>
    )
}

export default Register;