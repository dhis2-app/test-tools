import {fireEvent, screen} from "@testing-library/react";

export function click(id:string){
    fireEvent.click(screen.getByTestId(id));
}

export function clickByText(text:string){
    fireEvent.click(screen.getByText(text));
}