import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./router/routes";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import PageLoader from "./shared/components/PageLoader";
import { HelmetProvider } from "react-helmet-async";

const App = () =>{
  return(
      <HelmetProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
          </Suspense>
          
          <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3000,style: { background: "#0E100F",color: "#FEFCE1",border: "1px solid #FC8608", },
            success: { iconTheme: { primary: "#FC8608",secondary: "#FEFCE1", },},
            error: { iconTheme: { primary: "#ef4444",secondary: "#FEFCE1", },},
          }} 
          />

        </GoogleOAuthProvider>
      </HelmetProvider>
  )
}

export default App;