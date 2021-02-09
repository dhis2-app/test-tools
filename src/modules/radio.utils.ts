import {screen} from "@testing-library/react";

/**
 * Check that radio select found by `id` has selected value `value`
 *
 * @example
 * ```javascript
 * checkRadioValue('method', 'sum')
 * ```
 * @category Radio
 * */
export function checkRadioValue(id:string, value:string){
    // @ts-ignore
    expect(screen.getByTestId(`${id}_${value}`).checked, `Checkbox > ${id} > ${value}`).toBe(true);
}