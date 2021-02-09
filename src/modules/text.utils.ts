import {screen, waitFor} from "@testing-library/react";

export function text(text:string):void{
    screen.getAllByText(text);
}

export function texts(texts:string[]):void{
    texts.forEach((textToFind:string)=>text(textToFind));
}

export function noText(text:string):void{
    expect(screen.queryByText(text)).toBe(null);
}

export function noTexts(textsToFind:string[]):void{
    textsToFind.forEach(noText);
}

export function textWait(text:string):Promise<any>{
    return screen.findByText(text);
}

export function textsWait(textsToFind:string[]):Promise<any>{
    return waitFor(() => texts(textsToFind),{timeout: 10000});
}