import { Outlet, To, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.svg";
import Footer from "./Footer";
import TabSelect from "./TabSelect";

const menuEntries = [
    ["Getting Started", "/"],
    ["Adding Files", "/adding-files"],
    ["Converting", "/converting"],
    ["Downscaling", "/downscaling"],
    ["Shortcuts", "/shortcuts"],
    ["Supported Formats", "/supported-formats"],
    ["Settings", "/settings"],
    ["Troubleshooting", "/troubleshooting"],
    ["FAQ", "/faq"]
]

export default function Navigation(){
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
            <div className="logo">
                <a href="https://codepoems.eu/xl-converter" target="_blank">
                    <img src={logo} />
                    <h2>XL Converter</h2>
                </a>
                
            </div>

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