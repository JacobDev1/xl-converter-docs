import { Link, To } from "react-router-dom";

interface TabProps{
    title: string,
    url: To,
    index: number,
    selectedTab: number,
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function Tab({title, url, index, selectedTab, setSelectedTab}: TabProps){
    return(
        <Link to={url}>
            <button onClick={() => setSelectedTab(index)} className={selectedTab === index ? "active" : ""}>
                {title}
            </button>
    </Link>);
}