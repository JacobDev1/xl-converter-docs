import { Outlet, To, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./Footer";
import TabSelect from "./TabSelect";
import SearchBar from "./SearchBar";

import "../css/navigation.scss";

interface NavigationProps{
    menuEntries: Array<Array<string | string>>;
}

export default function Navigation({menuEntries}: NavigationProps){
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedTab(getCurrentIndex());
    }, [menuEntries]);

    function getCurrentIndex(){ // For entering website from a direct link
        for(let i = 0; i < menuEntries.length; i++){
            if(menuEntries[i][1].includes(window.location.pathname)){
                return i;
            }    
        }
        return 0;
    }
    
    return(<>
        {/* Desktop Menu */}
        <div className="navigation">

            <SearchBar navigate={navigate}/>

            <div className="navbar">
                {menuEntries.map((val, index) => <TabSelect title={val[0]} url={val[1]} id={index} index={selectedTab} setIndex={setSelectedTab} key={index}/>)}

                <Footer />
                <button className="donate-btn"><a href="https://codepoems.eu/donate" target="_blank">Donate</a></button>
            </div>

        </div>

        {/* Mobile Menu */}
        <div className="navigation-mobile">
            <select onChange={e => navigate(e.target.value)} value={menuEntries[getCurrentIndex()][1]}>
                {menuEntries.map((val, idx) => (
                    <option value={val[1]} key={idx}>{val[0]}</option>
                ))}
            </select>
        </div>

        {/* Content */}
        <div className="content">
            <Outlet />
        </div>
    </>);
}