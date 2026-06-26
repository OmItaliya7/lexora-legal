import Footer from "./Footer"   
import { Outlet, ScrollRestoration} from "react-router-dom";

const AppLayout = () =>{
    return(
        <>
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout;