import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../shared/layout/AppLayout";
import {lazy} from "react";

const Home = lazy(() => import("../features/home/pages/Home"));
const About = lazy(() => import("../features/about/pages/About"));
const OurTeam = lazy(() => import("../features/ourteam/pages/OurTeam"));
const AttorneyDetails = lazy(() => import("../features/ourteam/pages/AttorneyDetails"));
const PracticeArea = lazy(() => import("../features/practice-areas/pages/PracticeArea"));
const Contact = lazy(() => import("../features/contact/pages/Contact"));
const Login = lazy(() => import("../features/login/Login"));
const SignUp = lazy(() => import("../features/signup/SignUp"));
const ForgotPassword = lazy(() => import("../features/login/ForgotPassword"));
const ResetPassword = lazy(() => import("../features/login/ResetPassword"));

import ErrorPage from "../features/error/ErrorPage"; 
import PublicRoute from "../shared/routes/PublicRoute";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "ourteam",
        element: <OurTeam />,
      },
      {
        path: "ourteam/:slug",
        element: <AttorneyDetails />,
      },
      {
        path: "practicearea",
        element: <Navigate to="/practicearea/business-law" replace />,
      },
      {
        path: "practicearea/:slug",
        element: <PracticeArea />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        )
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        )
      },
      {
        path: "forgot-password",
        element: (
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        )
      },
      {
        path: "reset-password/:token",
        element: (
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        )
      },
    ],
  },
]);
