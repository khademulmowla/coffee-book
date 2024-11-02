import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* dynamic section  */}
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12 py-12">
                <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;