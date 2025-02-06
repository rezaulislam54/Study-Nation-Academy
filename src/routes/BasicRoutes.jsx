import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../layoutes/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoutes></MainLayoutes> ,
        children:[
            {
                path: "/",
                element: <HomePage />
            }
        ],
    }
]);

export default router;