import { NavigateFunction } from "react-router-dom";
import { useEffect } from "react";

import SearchBar from "./SearchBar";
import Footer from "./Footer";
import TabSelect from "./TabSelect";

interface DesktopMenuProps{
    menuEntries: Array<Array<string | string>>;
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
    navigate: NavigateFunction;
}

export default function DesktopMenu({menuEntries, selectedTab, setSelectedTab, navigate}: DesktopMenuProps){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedTab]);

    return(<div className="navigation">

        <SearchBar
            navigate={navigate}
            setSelectedTab={setSelectedTab}
        />

        <div className="navbar">
            {menuEntries.map(([title, url], index) => (
                <TabSelect
                    title={title}
                    url={url}
                    index={index}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    key={index}
                />
            ))}

            <Footer />
            {/* <button className="donate-btn"><a href="https://codepoems.eu/donate" target="_blank">Donate</a></button> */}
        </div>

    </div>);
}