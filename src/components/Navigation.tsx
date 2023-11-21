import { Outlet, useNavigate } from "react-router-dom";

import Footer from "./Footer";
import TabSelect from "./TabSelect";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

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
        <div className="navigation">

            <SearchBar navigate={navigate}/>

            <div className="navbar">
                {menuEntries.map((entry, index) => <TabSelect title={entry[0]} url={entry[1]} index={index} selectedTab={selectedTab} setSelectedTab={setSelectedTab} key={index}/>)}

                <Footer />
                <button className="donate-btn"><a href="https://codepoems.eu/donate" target="_blank">Donate</a></button>
            </div>

        </div>

        {/* Mobile Menu */}
        <MobileMenu menuEntries={menuEntries} selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigate={navigate}/>

        {/* Content */}
        <div className="content">
            <Outlet />
        </div>
    </>);
}