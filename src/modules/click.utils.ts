import {fireEvent, screen} from "@testing-library/react";

/**
 * Click element found by `id`
 *
 * @example
 * ```javascript
 * click('nextPage')
 * ```
 * @category Click
 * */
export function click(id:string){
    fireEvent.click(screen.getByTestId(id));
}

/**
 * Click element found by `text`
 *
 * @example
 * ```javascript
 * click('Next page')
 * ```
 * @category Click
 * */
export function clickByText(text:string){
    fireEvent.click(screen.getByText(text));
}