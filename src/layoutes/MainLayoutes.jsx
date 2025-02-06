import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayoutes = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoutes;