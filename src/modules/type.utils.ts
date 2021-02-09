import {fireEvent, screen} from "@testing-library/react";
import {pause} from "./pause.utils";

/**
 * Type `text` into `input` element found by `id`
 *
 * @example
 * ```javascript
 * type('search', 'George Orwell')
 * ```
 * @category Type text
 * */
export function type(id:string, text:string) {
    fireEvent.change(screen.getByTestId(id), { target: { value: text } });
}

/**
 * Type `text` into `input` element found by `id` and then wait to allow DOM to reflect changes
 *
 * @example
 * ```javascript
 * await typeWait('search', 'George Orwell')
 * ```
 * @category Type text
 * */
export async function typeWait(id:string, text:string){
    fireEvent.change(screen.getByTestId(id), { target: { value: text } })
    await pause(1);
}

