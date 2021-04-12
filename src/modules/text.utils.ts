import {screen, waitFor} from "@testing-library/react";

/**
 * Check if `text` is present in DOM **right now**
 *
 * @example
 * ```javascript
 * text('My awesome website')
 * ```
 * @category Text
 * */
export function text(text:string):void{
    screen.getAllByText(new RegExp(text));
}

/**
 * Check if multiple `texts` are present in DOM **right now**
 *
 * @example
 * ```javascript
 * texts(['My website','Login','Latest news'])
 * ```
 * @category Text
 * */
export function texts(texts:string[]):void{
    texts.forEach((textToFind:string)=>text(textToFind));
}

/**
 * Check that `text` is **NOT** present in DOM
 *
 * @example
 * ```javascript
 * noText('Error')
 * ```
 * @category Text
 * */
export function noText(text:string):void{
    expect(screen.queryByText(text)).toBe(null);
}

/**
 * Check that **none** of the provided tests are present in dom **right now**
 *
 * @example
 * ```javascript
 * noTexts(['Error','Loading'])
 * ```
 * @category Text
 * */
export function noTexts(textsToFind:string[]):void{
    textsToFind.forEach(noText);
}
/**
 * **Wait** until `text` appears in DOM
 *
 * @example
 * ```javascript
 * await textWait('3 results found')
 * ```
 * @category Text
 * */
export function textWait(text:string):Promise<any>{
    return screen.findByText(text);
}
/**
 * **Wait** until all texts appear in DOM
 *
 * @example
 * ```javascript
 * await textsWait(['3 results found','George Orwell','1984'])
 * ```
 * @category Text
 * */
export function textsWait(textsToFind:string[]):Promise<any>{
    return waitFor(() => texts(textsToFind),{timeout: 10000});
}