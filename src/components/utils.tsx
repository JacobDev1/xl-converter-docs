export function clamp(num: number, min: number, max: number){
    return Math.min(Math.max(num, min), max);
}

export function insertPhrase(content: string, index: number, phrase_org: string, phrase_rep: string){
    const left = content.substring(0, index);
    const right = content.substring(index + phrase_org.length, content.length);
    return left + phrase_rep + right;
}