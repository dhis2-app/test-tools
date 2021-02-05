import {screen} from "@testing-library/react";

export async function textWait(text:string):Promise<any>{
    return await screen.findByText(text);
}

export function noText(text:string){
    expect(screen.queryByText(text)).toBe(null);
}
