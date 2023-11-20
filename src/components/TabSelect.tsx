import { Link, To } from "react-router-dom";

interface TabProps{
    title: string,
    url: To,
    id: number,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Tab({title, url, id, index, setIndex}: TabProps){
    function handleIndexChange(){
        setIndex(id);
    }

    return(
        <Link to={url}>
            <button onClick={handleIndexChange} className={index === id ? "active" : ""}>
                {title}
            </button>
    </Link>);
}