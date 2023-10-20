import { Link, To } from "react-router-dom";

export default function Tab({title, url, id, index, setIndex}: {title: String, url: To, id: number, index: number, setIndex: any}){
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