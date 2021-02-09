import {fireEvent, screen} from "@testing-library/react";

export async function select(selectId:string, value:string){
    fireEvent.mouseDown(screen.getByTestId(selectId).childNodes[0]);
    screen.getByText(value);
    fireEvent.click(screen.getByText(value));
    checkSelectValue(selectId, value);
}

export function checkSelectValue(selectId:string, value:string){
    expect(screen.getByTestId(selectId).textContent).toMatch(new RegExp(value));
}