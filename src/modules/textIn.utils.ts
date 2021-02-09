import {screen} from "@testing-library/react";

export function textIn(id:string, text:string){
    expect(screen.getByTestId(id).textContent).toMatch(new RegExp(text));
}

export function noTextIn(id:string, text:string){
    expect(screen.getByTestId(id).textContent).not.toMatch(new RegExp(text));
}

export const textsIn = (id:string, texts:string[])=>texts.forEach((t:string)=>textIn(id, t));
export const noTextsIn = (id:string, texts:string[])=>texts.forEach((t:string)=>noTextIn(id, t));