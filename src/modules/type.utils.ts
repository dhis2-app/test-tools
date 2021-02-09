import {fireEvent, screen} from "@testing-library/react";
import {pause} from "./pause.utils";

export async function type(id:string, value:string){
    fireEvent.change(screen.getByTestId(id), { target: { value: value } })
    await pause(1);
}

export function typeIn(id:string, text:string) {
    fireEvent.change(screen.getByTestId(id), { target: { value: text } });
}