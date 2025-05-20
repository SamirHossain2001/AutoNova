import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";
import ErrorPageMain from "../layouts/ErrorPageMain";
import Listing from "../pages/Listing";
import Auction from "../pages/Auction";
import LoanCalculator from "../pages/LoanCalculator";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SubmitListing from "../pages/SubmitListing";
import ContactUs from "../pages/ContactUs";
import Service from "../pages/Service";
import DashBoard from "../pages/DashBoard";
import TrackVehicle from "../pages/TrackVehicle";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "listing",
        element: <Listing></Listing>,
      },
      {
        path: "auction",
        element: <Auction></Auction>,
      },
      {
        path: "calculator",
        element: <LoanCalculator></LoanCalculator>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "submitListing",
        element: <SubmitListing></SubmitListing>,
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "track-vehicle",
        element: <TrackVehicle></TrackVehicle>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPageMain></ErrorPageMain>,
  },
]);

export default router;
