import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { clamp } from "../components/utils";
import search_index from "../assets/search_index.json";
import parse from "html-react-parser";

export default function Search(){
    const [searchParams] = useSearchParams();
    const [entries, setEntries] = useState<string[][]>([]);

    function insertPhrase(content: string, index: number, phrase_org: string, phrase_rep: string){
        return content.substring(0, index) + phrase_rep + content.substring(index + phrase_org.length);
    }

    function getDescription(content: string, phrase: string, phrase_idx: number){
        const content_len = content.length;

        // Starting values
        let from = clamp(phrase_idx - 70, 0, content_len);
        let to = clamp(phrase_idx + 100, 0, content_len);

        // Display whole words
        while(content[from] != " " && from > 0){
            from--;
        }

        while(content[to] != " " && to < content_len - 1){
            to++;
        }

        let new_content = content.substring(from, to);
        const new_index = new_content.toLowerCase().indexOf(phrase.toLowerCase());

        // Mark searched phrase in bold
        new_content = insertPhrase(new_content, new_index, phrase ,`<b class="highlight">${phrase}</b>`);
        
        return new_content;
    }

    useEffect(() => {
        let phrase = searchParams.get("q") as string;
        let new_entries = search_index
            .filter((i) => i.content.toLowerCase().includes(phrase.toLowerCase()))
            .map((i) => {
                const idx = i.content.toLowerCase().indexOf(phrase.toLowerCase());
                const org_phrase = i.content.substring(idx, idx + phrase.length);
                return [i.title, getDescription(i.content, org_phrase, idx), i.link];
            });

        setEntries(new_entries);
    }, [searchParams]);

    return(<div className="search">
        {entries.length > 0 ? (
                <h1>Results for "{searchParams.get("q")}"</h1>
            ) : (
                <h1>No results for "{searchParams.get("q")}"</h1>
            )}
        {entries.length > 0 && 
            entries.map((entry) => (<div key={entry[1]}>
                <Link to={entry[2]}>
                    <h2>{entry[0]}</h2>
                </Link>
                <p>{parse(entry[1])}</p>
        </div>
        ))}
    </div>);
}