import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../layoutes/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;