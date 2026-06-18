import Header from "../layout/Header.jsx"
import bgImage from "../../assets/images/auth/login-bg.webp"

const AuthLayout = ({ children }) =>{
    return (
        <section aria-labelledby="auth-heading" className="relative w-full overflow-hidden">

        {/* Background */}
        <img src={bgImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>

        {/* Content */}
        <div className="relative z-10 container-main">
            <div className="container-content">
                <Header />
                {/* Wrapper for spacing */}
                <div className="flex justify-center py-17.5 md:py-20 xl:pt-22.75 xl:pb-26.25 border-b border-light/25">
                    {children}
                </div>
            </div>
        </div>
    </section>
    )
}

export default AuthLayout;