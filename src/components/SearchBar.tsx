import { NavigateFunction } from "react-router";

interface SearchBarProps{
    navigate: NavigateFunction;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchBar({navigate, setSelectedTab}: SearchBarProps){

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = (form.elements.namedItem("phrase") as HTMLInputElement).value.trim();
    
        if (input) {
            navigate(`/search?q=${encodeURIComponent(input)}`);
            setSelectedTab(-1);
        }    
      };
    
    return(<form className="search" onSubmit={handleSubmit}>
        <input type="text" name="phrase" placeholder="Search..."/>
        {/* <button type="submit">Search</button> */}
    </form>);
}