import {screen} from "@testing-library/react";

/**
 * Check if `text` is present inside of element found by `id`
 *
 * @example
 * ```javascript
 * textIn('username', 'Bob')
 * ```
 * @category Text Inside Element
 * */
export function textIn(id:string, text:string){
    expect(screen.getByTestId(id).textContent).toMatch(new RegExp(text));
}

/**
 * Check that there is no `text` inside the element found by `id`
 *
 * @example
 * ```javascript
 * noTextIn('results', 'Bob')
 * ```
 * @category Text Inside Element
 * */
export function noTextIn(id:string, text:string){
    expect(screen.getByTestId(id).textContent).not.toMatch(new RegExp(text));
}

/**
 * Check that all `texts` are inside the element found by `id`
 *
 * @example
 * ```javascript
 * textsIn('results', ['Bob','Tom'])
 * ```
 * @category Text Inside Element
 * */
export const textsIn = (id:string, texts:string[])=>texts.forEach((t:string)=>textIn(id, t));

/**
 * Check that none of the `texts` are inside the element found by `id`
 *
 * @example
 * ```javascript
 * noTextsIn('results', ['Bob','Tom'])
 * ```
 * @category Text Inside Element
 * */
export const noTextsIn = (id:string, texts:string[])=>texts.forEach((t:string)=>noTextIn(id, t));