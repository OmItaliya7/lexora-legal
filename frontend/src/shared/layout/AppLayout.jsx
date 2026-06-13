
// import Footer from "./Footer"   
// import { Outlet } from "react-router-dom";

// const AppLayout = () =>{
//     return(
//         <>
//             <main id="main-content" className="flex justify-center">
//                 <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-[120px]">
//                     <Outlet />
//                 </div>
//             </main>
//             <Footer />
//         </>
//     )
// }

// export default AppLayout;





import Footer from "./Footer"   
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const AppLayout = () =>{
    return(
        <>
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout;