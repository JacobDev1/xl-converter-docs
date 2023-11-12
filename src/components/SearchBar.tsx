import { NavigateFunction } from "react-router";

export default function SearchBar({navigate}:{navigate: NavigateFunction}){
    function handleSubmit(e: any){
        e.preventDefault();
        if(e.target.phrase.value.replace(/ /g, "") == ""){return;}  // Prevent empty search
        navigate(`/search?q=${e.target.phrase.value}`);
    }

    return(<form className="search" onSubmit={handleSubmit}>
        <input type="text" name="phrase" placeholder="Search..."/>
        {/* <button type="submit">Search</button> */}
    </form>);
}