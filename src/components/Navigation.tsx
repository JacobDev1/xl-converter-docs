import { Outlet, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import "../css/navigation.scss";

interface NavigationProps{
    menuEntries: Array<Array<string | string>>;
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navigation({menuEntries, selectedTab, setSelectedTab}: NavigationProps){
    const navigate = useNavigate();

    return(<>
        {/* Desktop Menu */}
        <DesktopMenu
            menuEntries={menuEntries}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            navigate={navigate}
        />

        {/* Mobile Menu */}
        <MobileMenu
            menuEntries={menuEntries}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            navigate={navigate} 
        />

        {/* Content */}
        <div className="content">
            <Outlet />
        </div>
    </>);
}