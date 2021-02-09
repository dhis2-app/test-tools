import {screen} from "@testing-library/react";

export function checkRadioValue(id:string, value:string){
    // @ts-ignore
    expect(screen.getByTestId(`${id}_${value}`).checked, `Checkbox > ${id} > ${value}`).toBe(true);
}