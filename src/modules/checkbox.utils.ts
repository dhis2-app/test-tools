import {screen} from "@testing-library/react";

/**
 * Check that checkbox found by `id` is `checked` (or unchecked for `false`)
 *
 * @example
 * ```javascript
 * checkboxValue('includeExpired', true)
 * ```
 * @category Checkbox
 * */
export function checkboxValue(id:string, checked:boolean){
    // @ts-ignore
    expect(screen.getByTestId(id).checked).toBe(checked);
}