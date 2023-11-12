import { Outlet, To, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "./Footer";
import TabSelect from "./TabSelect";
import SearchBar from "./SearchBar";

import "../css/navigation.scss";

export default function Navigation({menuEntries}:{menuEntries: Array<Array<string | string>>}){
    const [selectedTab, setSelectedTab] = useState(getCurrentIndex());
    const navigate = useNavigate();

    function getCurrentIndex(){ // For entering website from a direct link
        for(let i = 0; i < menuEntries.length; i++){
            if(menuEntries[i][1].includes(window.location.pathname)){
                return i;
            }    
        }
        return 0;
    }

    function handleOnChangeMobile(target: To){
        navigate(target);
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
            <select onChange={e => handleOnChangeMobile(e.target.value)} defaultValue={menuEntries[getCurrentIndex()][1]}>
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