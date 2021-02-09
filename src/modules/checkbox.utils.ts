import {screen} from "@testing-library/react";

export function checkboxValue(id:string, value:boolean){
    // @ts-ignore
    expect(screen.getByTestId(id).checked).toBe(value);
}