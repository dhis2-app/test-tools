import {fireEvent, screen} from "@testing-library/react";

/**
 * Select `value` in select element found by `id`
 *
 * @example
 * ```javascript
 * select('pizzaDough','newYorkSyle')
 * ```
 * @category Select
 * */
export async function select(id:string, value:string){
    fireEvent.mouseDown(screen.getByTestId(id).childNodes[0]);
    fireEvent.click(screen.getByText(value));
    checkSelectValue(id, value);
}

export async function selectById(id:string, value:string){
    fireEvent.mouseDown(screen.getByTestId(id).childNodes[0]);
    fireEvent.click(screen.getByTestId(value));
}

/**
 * Check that select element found by `id` has value `value`
 *
 * @example
 * ```javascript
 * checkSelectValue('pizzaDough','newYorkSyle')
 * ```
 * @category Select
 * */
export function checkSelectValue(id:string, value:string){
    expect(screen.getByTestId(id).textContent).toMatch(new RegExp(value));
}