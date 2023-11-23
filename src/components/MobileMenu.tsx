import { NavigateFunction } from "react-router-dom";

interface MobileMenuProps{
    menuEntries: Array<Array<string | string>>;
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
    navigate: NavigateFunction;
}

export default function MobileMenu({menuEntries, selectedTab, setSelectedTab, navigate}: MobileMenuProps){
    function handleNavigate(url: string, idx: number){
        navigate(url);
        setSelectedTab(idx);
    }

    return(<div className="navigation-mobile">
        <select
            onChange={e => handleNavigate(e.target.value, e.target.selectedIndex)}
            value={menuEntries[selectedTab][1]}>
            
            {menuEntries.map(([title, url], idx) => (
                <option value={url} key={idx}>{title}</option>
            ))}
        </select>
    </div>);
}