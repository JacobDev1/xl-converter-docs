import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { clamp } from "../components/utils";

import parse from "html-react-parser";

interface SearchProps{
    updateSelectedTab: (location: string) => void;
    searchIndex: {
        title: string;
        content: string;
        link: string;
    }[];
}

export default function Search({updateSelectedTab, searchIndex}: SearchProps){
    const [searchParams] = useSearchParams();
    const [entries, setEntries] = useState<string[][]>([]);

    // Replace a specified phrase with a new phrase in a content
    function insertPhrase(content: string, index: number, phraseOrg: string, phraseNew: string){
        return content.substring(0, index) + phraseNew + content.substring(index + phraseOrg.length);
    }

    // Return a description of a search entry
    function getDescription(content: string, phrase: string, phraseIdx: number){
        const contentLen = content.length;

        // Starting values
        let from = clamp(phraseIdx - 70, 0, contentLen);
        let to = clamp(phraseIdx + 100, 0, contentLen);

        // Display whole words
        while(content[from] != " " && from > 0){
            from--;
        }

        while(content[to] != " " && to < contentLen - 1){
            to++;
        }

        let newContent = content.substring(from, to);
        const newIndex = newContent.toLowerCase().indexOf(phrase.toLowerCase());

        // Mark the searched phrase in bold
        newContent = insertPhrase(newContent, newIndex, phrase ,`<b class="highlight">${phrase}</b>`);
        
        return newContent;
    }

    useEffect(() => {
        let phrase = searchParams.get("q") as string;
        if (!phrase || !phrase.trim()) return;
        
        let newEntries = searchIndex
            .filter((i) => i.content.toLowerCase().includes(phrase.toLowerCase()))
            .map((i) => {
                const idx = i.content.toLowerCase().indexOf(phrase.toLowerCase());
                const orgPhrase = i.content.substring(idx, idx + phrase.length);
                return [i.title, getDescription(i.content, orgPhrase, idx), i.link];
            });

        setEntries(newEntries);
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
                    <h2 onClick={() => updateSelectedTab(entry[2])}>{entry[0]}</h2>
                </Link>
                <p>{parse(entry[1])}</p>
        </div>
        ))}
    </div>);
}