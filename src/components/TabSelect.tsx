import { Link, To } from "react-router-dom";

interface TabSelectProps{
    title: string,
    url: To,
    index: number,
    selectedTab: number,
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function TabSelect({title, url, index, selectedTab, setSelectedTab}: TabSelectProps){
    return(
        <Link to={url}>
            <button onClick={() => setSelectedTab(index)} className={selectedTab === index ? "active" : ""}>
                {title}
            </button>
    </Link>);
}