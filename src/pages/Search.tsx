import { useState, useEffect } from "react";
import { Link, To, useSearchParams } from "react-router-dom";
import { clamp, insertPhrase } from "../components/utils";
import search_index from "../assets/search_index.json";

export default function Search(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [entries, setEntries] = useState<string[][]>([]);

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
        const new_index = new_content.toLowerCase().indexOf(phrase);

        // Mark searched phrase in bold
        new_content = insertPhrase(new_content, new_index, phrase ,`<b class="highlight">${phrase}</b>`);
        
        return new_content;
    }

    useEffect(() => {
        let phrase = searchParams.get("q") as string;   // Already lower case

        let new_entries: string[][] = [];

        for(let i of search_index){
            const idx = i.content.toLowerCase().indexOf(phrase);

            if(idx != -1){
                const entry = [i.title, getDescription(i.content, phrase, idx), i.link];
                new_entries.push(entry);
            }
        }
        setEntries(new_entries);
    }, [searchParams]);

    return(<div className="search">
        {entries.length > 0 ? <h1>Results for "{searchParams.get("q")}"</h1> : <h1>No results for "{searchParams.get("q")}"</h1>}
        {entries.length > 0 && entries.map(i => (<>
            <Link to={i[2]}><h2>{i[0]}</h2></Link>
            <p dangerouslySetInnerHTML={{__html: i[1]}}></p>
        </>
        ))}
    </div>);
}