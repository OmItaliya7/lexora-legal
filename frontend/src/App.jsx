import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./router/routes";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import PageLoader from "./shared/components/PageLoader";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./shared/components/ErrorBoundary";

const toastOptions = {
  duration: 3000,
  style: {
    background: "var(--color-primary)",
    color: "var(--color-light)",
    border: "1px solid var(--color-secondary)",
  },
  success: {
    iconTheme: {
      primary: "#FC8608",
      secondary: "#FEFCE1",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444",
      secondary: "#FEFCE1",
    },
  },
}

const googleClientId=import.meta.env.VITE_GOOGLE_CLIENT_ID

const App = () =>{
  return(
      <HelmetProvider>
        <GoogleOAuthProvider clientId={googleClientId}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <RouterProvider router={router} />
            </Suspense> 
          </ErrorBoundary>
          <Toaster position="top-right" reverseOrder={false} toastOptions={toastOptions} />
        </GoogleOAuthProvider>
      </HelmetProvider>
  )
}

export default App;