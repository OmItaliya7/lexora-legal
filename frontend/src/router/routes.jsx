import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../shared/layout/AppLayout";

import {lazy, Suspense} from "react";

const Home = lazy(() => import("../features/home/pages/Home"));
const About = lazy(() => import("../features/about/pages/About"));
const OurTeam = lazy(() => import("../features/ourteam/pages/OurTeam"));
const AttorneyDetails = lazy(() => import("../features/ourteam/pages/AttorneyDetails"));
const PracticeArea = lazy(() => import("../features/practiceareas/pages/PracticeArea"));
const Contact = lazy(() => import("../features/contactus/pages/Contact"));
const Login = lazy(() => import("../features/login/Login"));
const SignUp = lazy(() => import("../features/signup/SignUp"));
const ErrorPage = lazy(() => import("../features/error/ErrorPage"));
const ForgotPassword = lazy(() => import("../features/login/ForgotPassword"));
const ResetPassword = lazy(() => import("../features/login/ResetPassword"));

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
        element: <Navigate to="/practicearea/business-law" />,
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
