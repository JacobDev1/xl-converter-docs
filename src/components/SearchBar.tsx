import { NavigateFunction } from "react-router";

interface SearchBarProps{
    navigate: NavigateFunction;
}

export default function SearchBar({navigate}: SearchBarProps){

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = (form.elements.namedItem("phrase") as HTMLInputElement).value.trim();
    
        if (input) {
            navigate(`/search?q=${encodeURIComponent(input)}`);
        }    
      };
    
    return(<form className="search" onSubmit={handleSubmit}>
        <input type="text" name="phrase" placeholder="Search..."/>
        {/* <button type="submit">Search</button> */}
    </form>);
}